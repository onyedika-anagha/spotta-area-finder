import Button from "components/button/button.component";
import CustomSelect from "components/form-input/form-select.component";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionMeta, MultiValue } from "react-select";
import { Rating } from "react-simple-star-rating";
import { addReview } from "store/reviews/review.action";
import { selectCurrentUser } from "store/user/user.selector";
import {
  PlaceLocation,
  ReviewFormData,
  capitalize,
  classNames,
} from "utils/helper/helper";
import { amenities } from "utils/helper/states";

const options = amenities.map((i) => ({
  value: i,
  label: capitalize(i),
}));

type Props = {
  location: PlaceLocation;
  closeModal: () => void;
};

const defaultValues: ReviewFormData = {
  name: "",
  rating: "0",
  review: "",
  amenities: "",
  area_id: "",
};

function ReviewForm({ location, closeModal }: Props) {
  const [formFields, setFormFields] = useState(defaultValues),
    [checked, setChecked] = useState(false),
    { review } = formFields,
    dispatch = useDispatch(),
    user = useSelector(selectCurrentUser);

  const handleRating = (rate: number) => {
      setFormFields({ ...formFields, rating: rate.toString() });
    },
    handleCheckbox = () => {
      setChecked(!checked);
    },
    handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = event.target;
      if (name !== "anonymous") {
        setFormFields({ ...formFields, [name]: value });
      } else {
        console.log(value);
      }
    };

  const handleSelect = (
      newValue: MultiValue<{ value: string; label: string }>,
      actionMeta: ActionMeta<{ value: string; label: string }>
    ) => {
      const _options = newValue.map((i) => i.value),
        options = _options.join(", ");
      setFormFields({ ...formFields, amenities: options });
    },
    isObjectFilled = (obj: ReviewFormData) => {
      const { name, rating, review, amenities, area_id } = obj;
      return (
        name !== "" &&
        rating !== "0" &&
        review !== "" &&
        amenities !== "" &&
        area_id !== ""
      );
    },
    proceed = isObjectFilled(formFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(addReview({ ...formFields, callback: closeModal }));
    } catch (error) {
      // auth/user-not-found

      console.log(error);
    }
  };
  useEffect(() => {
    if (location.id !== formFields.area_id) {
      setFormFields({ ...formFields, area_id: location.id });
    }
    if (user != null && user.displayName !== formFields.name) {
      setFormFields({ ...formFields, name: user.displayName });
    }
  }, [location, formFields, user]);
  useEffect(() => {
    if (checked) {
      setFormFields({ ...formFields, name: "Anonymous" });
    } else {
      if (user != null && user.displayName !== formFields.name) {
        setFormFields({ ...formFields, name: user.displayName });
      }
    }
  }, [checked, formFields, user]);

  return (
    <form
      className="mt-2 space-y-3"
      onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="area_id"
        value={location.id}
      />
      <CustomSelect
        isMulti
        options={options}
        placeholder="Select Amenities"
        onChange={handleSelect}
      />
      <div className="flex flex-col">
        <span>Rate location</span>
        <Rating
          size={24}
          fillColor="#FABB07"
          onClick={handleRating}
        />
      </div>
      <div>
        <label
          htmlFor="review"
          className="block mb-2 text-gray-900 dark:text-white auth-input-label">
          Write Review
        </label>
        <textarea
          name="review"
          id="review"
          cols={30}
          rows={4}
          onChange={handleChange}
          value={review}
          className={classNames(
            "block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg",
            "border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
            "dark:border-gray-600 dark:placeholder-gray-400",
            "dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          )}
          placeholder="Leave a comment..."
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          id="checkbox-1"
          type="checkbox"
          name="anonymous"
          onChange={handleCheckbox}
          className={classNames(
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded",
            "focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800",
            "dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-woodsmoke-700 dark:border-gray-600"
          )}
        />
        <label
          htmlFor="checkbox-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Post as Anonymous
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button disabled={!proceed}>Submit</Button>
        <Button
          type="button"
          isDefault={false}
          onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default ReviewForm;

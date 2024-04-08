import Button from "components/button/button.component";
import CustomSelect from "components/form-input/form-select.component";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionMeta, MultiValue } from "react-select";
import { Rating } from "react-simple-star-rating";
import { addReview } from "store/reviews/review.action";
import { selectCurrentUser, selectIsLoading } from "store/user/user.selector";
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
    user = useSelector(selectCurrentUser),
    isLoading = useSelector(selectIsLoading);

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
        <Button disabled={!proceed || isLoading}>
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
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

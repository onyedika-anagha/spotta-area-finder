import Button from "components/button/button.component";
import Header from "components/navigation/header";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Reviews, classNames, stringToArray } from "utils/helper/helper";
import LeaveReview from "./leave-review.component";

export type PlaceProps = {
  reviews: Reviews | undefined;
  location: {
    id: string;
    name: string;
    tags: string;
    slug: string;
    image: string;
  };
};

function PlaceHeader({ reviews, location }: PlaceProps) {
  return (
    <div className="pb-2 bg-[#F2F6FD] dark:bg-woodsmoke-950">
      <Header searchText={location.name} />
      <div className="main flex flex-col gap-2">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-medium text-xl">{location.name}</h3>
            <span className="text-base font-semibold">
              “{reviews?.length}” Reviews
            </span>
          </div>
          {reviews != null && reviews.length > 0 && (
            <div className="flex gap-2">
              <LeaveReview {...{ location }} />
              <Button
                className="text-xs px-4"
                isDefault={false}>
                <BsBookmark />
              </Button>
              <Button
                className="text-xs px-4"
                isDefault={false}>
                <BsShare />
              </Button>
            </div>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {stringToArray(location.tags).map((tag, i) => (
            <span
              key={i}
              className={classNames(
                "bg-white text-gray-800 text-xs font-medium text-nowrap",
                "px-2.5 py-0.5 rounded dark:bg-[#242428] dark:text-gray-200 border border-gray-400"
              )}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaceHeader;

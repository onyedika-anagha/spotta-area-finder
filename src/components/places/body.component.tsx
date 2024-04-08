import { PlaceProps } from "./header.component";
import emptySvg from "assets/empty.svg";
import PlaceReviews from "./reviews.component";
import PlaceImages from "./images.component";
import LeaveReview from "./leave-review.component";

function PlaceDetailsBody({ reviews, location }: PlaceProps) {
  return (
    <div className="main mb-3">
      <div className="grid h-full items-center gap-4 lg:grid-cols-12">
        <PlaceReviews {...{ reviews }} />
        {reviews != null && reviews.length > 0 && <PlaceImages />}
      </div>
      {reviews?.length === 0 && (
        <div className="flex flex-col gap-3 pt-24 w-full items-center justify-center px-4">
          <img
            src={emptySvg}
            alt="empty icon"
          />
          <span>Oops! No reviews yet.</span>
          <LeaveReview location={location} />
        </div>
      )}
    </div>
  );
}

export default PlaceDetailsBody;

import Reveal from "components/toolkit/reveal.component";
import {
  AnimateType,
  Reviews,
  arrangeReviewsByCreatedAtDesc,
} from "utils/helper/helper";
import PlaceReviewCard, {
  PlaceReviewCardLoader,
} from "./review-card.component";

function PlaceReviews({ reviews }: { reviews: Reviews | undefined }) {
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      className=" col-span-12 lg:col-span-7">
      <div className="flex flex-col flex-col p-4 space-y-4 border-gray-200 divide-y divide-gray-200">
        {reviews == null
          ? new Array(10)
              .fill(0)
              .map((_, i) => <PlaceReviewCardLoader key={i} />)
          : arrangeReviewsByCreatedAtDesc(reviews).map((review) => (
              <PlaceReviewCard
                key={review.id}
                review={review}
              />
            ))}
      </div>
    </Reveal>
  );
}

export default PlaceReviews;

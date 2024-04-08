import { useSelector } from "react-redux";
import ReviewGrid from "./review-grid.component";
import { selectReviews } from "store/reviews/review.selector";

function RightHeroReviews() {
  const reviews = useSelector(selectReviews);
  return <ReviewGrid reviews={reviews} />;
}

export default RightHeroReviews;

import { useState } from "react";
import classes from "./review-grid.component.module.css";
import {
  Reviews,
  arrangeReviewsByCreatedAtDesc,
  processNumbers,
} from "utils/helper/helper";
import ReviewCard, { ReviewCardLoader } from "./review-card.component";

function ReviewGrid({ reviews }: { reviews: Reviews | null }) {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercent(scrolled);
  };

  const reviewDatas = new Array(20).fill(0);
  return (
    <div
      className={`${classes["overlay-scroll-container"]} col-span-12 lg:col-span-5 flex h-full mb-3`}>
      <div
        className={`${classes["overlay-scroll-content"]} grid lg:grid-cols-2 gap-2`}
        onScrollCapture={handleScroll}>
        {/* Your scrollable content */}
        {reviews == null
          ? reviewDatas.map((item, index) => <ReviewCardLoader key={index} />)
          : arrangeReviewsByCreatedAtDesc(reviews).map((item, index) => (
              <ReviewCard
                key={index}
                review={item}
                num={processNumbers(index)}
              />
            ))}
        {/* This div will have a fading overlay on top */}
      </div>
      <div
        className={classes["overlay-scroll-overlay-top"]}
        style={{ opacity: scrollPercent > 1 ? 1 : 0 }}
      />
      <div
        className={classes["overlay-scroll-overlay-bottom"]}
        style={{ opacity: scrollPercent < 98 ? 1 : 0 }}
      />
    </div>
  );
}

export default ReviewGrid;

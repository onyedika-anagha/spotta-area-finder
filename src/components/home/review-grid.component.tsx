import { useState } from "react";
import classes from "./review-grid.component.module.css";
import { Reviews } from "utils/helper/helper";
import ReviewCard from "./review-card.component";

function ReviewGrid({ reviews }: { reviews: Reviews | null }) {
  const [showTopOverLay, setShowTopOverLay] = useState<boolean>(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop >= 30) {
      setShowTopOverLay(true);
    } else {
      setShowTopOverLay(false);
    }
  };
  const reviewDatas = reviews == null ? new Array(20).fill(0) : reviews;
  return (
    <div
      className={`${classes["overlay-scroll-container"]} col-span-12 lg:col-span-5 flex h-full`}>
      <div
        className={`${classes["overlay-scroll-content"]} grid lg:grid-cols-2 gap-2`}
        onScrollCapture={handleScroll}>
        {/* Your scrollable content */}
        {reviewDatas.map((item, index) => (
          <ReviewCard key={index} />
        ))}
        {/* This div will have a fading overlay on top */}
      </div>
      <div
        className={classes["overlay-scroll-overlay-top"]}
        style={{ opacity: showTopOverLay ? 1 : 0 }}
      />
      <div className={classes["overlay-scroll-overlay-bottom"]} />
    </div>
  );
}

export default ReviewGrid;

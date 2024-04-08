import Image from "components/image/image.component";
import Reveal from "components/toolkit/reveal.component";
import moment from "moment";
import { BiSolidStar } from "react-icons/bi";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { AnimateType, Review, extractFirstWords } from "utils/helper/helper";

function PlaceReviewCard({ review }: { review: Review }) {
  const date = moment(review.createdAt, "MMMM D, YYYY [at] HH:mm:ss");
  const timeago = date.fromNow();
  return (
    <Reveal
      type={AnimateType.FadeInRight}
      className="pt-2">
      <>
        <div className="box-header">
          <div className="flex items-center w-full gap-2">
            <Image
              src={review.image}
              className="rounded-full h-6 w-6 relative"
              alt="Images Description"
              style={{ position: "relative" }}
              width={25}
              height={25}
            />
            <div className="flex gap-2 items-center">
              <div className="text-xs font-semibold">
                {extractFirstWords(review.name)}
              </div>
              <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">
                {timeago}
              </p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-0.5">
                <BiSolidStar
                  size={12}
                  color="#FABB07"
                />
                <span className="text-xs pt-0.5">{review.rating}.0</span>
              </div>
            </div>
          </div>
        </div>

        <p className="font-normal text-[14px] text-gray-700 dark:text-gray-400">
          {review.review}
        </p>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <div className="text-[#8F95B2] flex items-center space-x-2 relative">
            <span
              className="relative flex items-center rounded-full leading-none group transition-colors h-8 text-xs"
              title="Views">
              <FaRegThumbsUp size={14} />
              <span className="ml-1">24</span>
            </span>
            <span
              className="relative flex items-center rounded-full leading-none group transition-colors h-8 text-xs"
              title="Views">
              <FaRegThumbsDown size={14} />
              <span className="ml-1">02</span>
            </span>
            <span
              className="relative flex items-center rounded-full leading-none group transition-colors h-8 text-xs"
              title="Views">
              <FaRegMessage size={14} />
              <span className="ml-1">125</span>
            </span>
          </div>
        </div>
      </>
    </Reveal>
  );
}

export const PlaceReviewCardLoader = () => {
  return (
    <div
      role="status"
      className="animate-pulse w-full">
      <div className="flex items-center justify-between w-full">
        <div className="pr-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10"></div>
          <div className="h-5 w-[80px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-5 w-[80px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default PlaceReviewCard;

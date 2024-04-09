import { Rating } from "react-simple-star-rating";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import ReviewBadge from "./review-badge.component";
import Image from "../image/image.component";
import { AnimateType, Review, extractFirstWords } from "utils/helper/helper";
import moment from "moment";
import Reveal from "components/toolkit/reveal.component";

function getRandomService(num: number): string {
  const services = ["power", "water", "traffic", "wifi"];
  // const randomIndex = Math.floor(Math.random() * services.length);
  return services[num];
}
function ReviewCard({ review, num }: { review: Review; num: number }) {
  const date = moment(review.createdAt, "MMMM D, YYYY [at] HH:mm:ss");
  const timeago = date.fromNow();
  return (
    <Reveal
      type={AnimateType.FadeInRight}
      className="card">
      <>
        <div className="box-header">
          <div className="flex items-center w-full">
            <div className="mr-2">
              <Image
                src={review.image}
                className="rounded-full h-6 w-6 relative"
                alt="Images Description"
                style={{ position: "relative" }}
                width={25}
                height={25}
              />
            </div>
            <div className="">
              <div className="text-[12px] font-semibold">
                {extractFirstWords(review.name)}
              </div>
              <p className="mb-0 text-gray-500 dark:text-white/70 text-[8px]">
                {timeago}
              </p>
            </div>
            <div className="ml-auto flex flex-col mt-1">
              <p className="text-[10px]">Ikate, Lagos.</p>
              <div className="relative">
                <Rating
                  initialValue={parseInt(review.rating)}
                  size={12}
                  className="absolute top-[-5px]"
                  fillColor="#FABB07"
                  readonly
                />
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
              <FaThumbsUp
                width={16}
                height={14}
              />
              <span className="ml-1">24</span>
            </span>
            <span
              className="relative flex items-center rounded-full leading-none group transition-colors h-8 text-xs"
              title="Views">
              <FaThumbsDown
                width={16}
                height={14}
              />
              <span className="ml-1">02</span>
            </span>
            <span
              className="relative flex items-center rounded-full leading-none group transition-colors h-8 text-xs"
              title="Views">
              <FaMessage
                width={16}
                height={14}
              />
              <span className="ml-1">125</span>
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
            <ReviewBadge badge={getRandomService(num)} />
          </div>
        </div>
      </>
    </Reveal>
  );
}
export const ReviewCardLoader = () => {
  return (
    <div
      role="status"
      className="card animate-pulse w-full">
      <div className="flex items-center w-full">
        <div className="pr-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10"></div>
          <div className="h-5 w-[80px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-5 w-[80px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>

      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default ReviewCard;

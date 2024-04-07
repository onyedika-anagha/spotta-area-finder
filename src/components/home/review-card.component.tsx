import { Rating } from "react-simple-star-rating";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import ReviewBadge from "./review-badge.component";
import Image from "../image/image.component";

function ReviewCard() {
  return (
    <div className="card">
      <div className="box-header">
        <div className="flex items-center w-full">
          <div className="mr-2">
            <Image
              src="/images/user.jpg"
              className="rounded-full h-6 w-6 relative"
              alt="Images Description"
              style={{ position: "relative" }}
              width={25}
              height={25}
            />
          </div>
          <div className="">
            <div className="text-[12px] font-semibold">James T.</div>
            <p className="mb-0 text-gray-500 dark:text-white/70 text-[8px]">
              5 months ago
            </p>
          </div>
          <div className="ml-auto flex flex-col mt-1">
            <p className="text-[10px]">Ikate, Lagos.</p>
            <div className="relative">
              <Rating
                initialValue={3}
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
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are lots stores and Supermarkets.
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
          <ReviewBadge badge="water" />
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;

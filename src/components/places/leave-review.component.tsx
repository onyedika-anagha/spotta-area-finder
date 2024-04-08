import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "components/button/button.component";
import { PlaceLocation, classNames } from "utils/helper/helper";
import ReviewForm from "./review-form.component";

type Props = {
  location: PlaceLocation;
};
function LeaveReview({ location }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button
        className="text-xs px-5"
        onClick={openModal}>
        Leave a review
      </Button>

      <Transition
        appear
        show={isOpen}
        as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-[#1D3045] dark:bg-woodsmoke-950 dark:bg-opacity-[.99] bg-opacity-[.99]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col z-50 min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className={classNames(
                    "w-full lg:w-3/5 transform overflow-hidden rounded-2xl bg-white",
                    "p-6 pt-0 text-left align-middle shadow-xl transition-all offcanvas",
                    "dark:bg-woodsmoke-950 border border-gray-500"
                  )}>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="crypto-modal">
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-4 text-center rounded-t">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                      Review Location
                    </Dialog.Title>
                  </div>
                  <div className="h-[470px]">
                    <h3 className="font-base text-lg">{location.name}</h3>
                    <ReviewForm {...{ location, closeModal }} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LeaveReview;

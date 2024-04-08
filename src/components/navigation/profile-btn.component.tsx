import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames, truncateEmail } from "utils/helper/helper";
import { CurrentUser } from "store/user/user.slice";
import { useDispatch } from "react-redux";
import { signOutStart } from "store/user/user.action";
import Image from "components/image/image.component";
import avatar from "assets/user.jpg";

export default function ProfileBtn({ user }: { user: CurrentUser }) {
  const dispatch = useDispatch(),
    logOut = () => {
      dispatch(signOutStart());
    };
  return (
    <Menu
      as="div"
      className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Image
            src={avatar}
            alt={user.displayName}
            className="h-6 w-6 rounded-full"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items
          className={classNames(
            "absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100",
            "rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            "bg-white dark:bg-[#18181B]"
          )}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-woodsmoke-950 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-400",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}>
                  {truncateEmail(user.email)}
                </span>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#!"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-woodsmoke-950 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-400",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}>
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#!"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-woodsmoke-950 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-400",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}>
                  Settings
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  role="button"
                  onClick={logOut}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-woodsmoke-950 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-400",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}>
                  Log Out
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

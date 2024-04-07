import { classNames } from "utils/helper/helper";

function ReviewBadge({ badge }: { badge: string }) {
  switch (badge) {
    case "water":
      return (
        <span
          className={classNames(
            "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded",
            "dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400"
          )}>
          {badge}
        </span>
      );
    case "traffic":
      return (
        <span
          className={classNames(
            "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded",
            "dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400"
          )}>
          {badge}
        </span>
      );
    case "power":
      return (
        <span
          className={classNames(
            "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded",
            "dark:bg-gray-700 dark:text-red-400 border border-red-400"
          )}>
          {badge}
        </span>
      );

    default:
      return (
        <span
          className={classNames(
            "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded",
            "dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
          )}>
          {badge}
        </span>
      );
  }
}

export default ReviewBadge;

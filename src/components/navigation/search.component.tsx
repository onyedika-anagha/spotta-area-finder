import FormInput from "components/form-input/form-input.component";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "utils/helper/helper";
import { locations } from "utils/helper/states";
import useDebounce from "utils/hooks/useDebounce";
import emptySvg from "assets/empty.svg";

function TopSearchBar({ searchText }: { searchText?: string }) {
  const [searchValue, setSearchValue] = useState(""),
    [isOpen, setIsOpen] = useState(false),
    deBounceValue = useDebounce(searchValue, 2000);

  const filteredResults = locations.filter((item) =>
    item.name.toLowerCase().includes(deBounceValue.toLowerCase())
  );
  //   const searchResults = locations.filter(location)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  useEffect(() => {
    if (searchValue.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchValue]);

  return (
    <div className="relative">
      <FormInput
        value={searchValue}
        name="searchValue"
        className={`lg:w-[778px] ${searchText == null ? "" : "bg-white"}`}
        onChange={handleChange}
        type="search"
      />
      <div
        className={classNames(
          "absolute w-full bg-white dark:bg-woodsmoke-900 shadow",
          isOpen ? "" : "hidden"
        )}
        style={{
          zIndex: "9999999",
        }}>
        <div className="p-2 border-b border-dashed border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h6 className="text-sm"> Places & Locations</h6>
            <Link
              to="/places"
              className="text-gray-500 underline">
              <small>View All</small>
            </Link>
          </div>
        </div>

        {searchValue !== deBounceValue && (
          <div className="absolute inset-0 w-full flex items-center justify-center bg-white/75 dark:bg-black/75">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div className="overflow-y-auto h-64 flex flex-col flex-col border-gray-200 divide-y divide-gray-200">
          {filteredResults.map((location) => (
            <Link
              key={location.id}
              to={`/place/${location.slug}`}
              className={classNames(
                "text-gray-700 dark:text-gray-400 w-full p-4",
                "hover:bg-gray-100 dark:hover:bg-woodsmoke-950"
              )}>
              {location.name}
            </Link>
          ))}
          {filteredResults.length === 0 && (
            <div className="flex flex-col gap-3 w-full items-center justify-center p-4">
              <img
                src={emptySvg}
                alt="empty icon"
                width={150}
                height={150}
              />
              <span>Oops! no place was found.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSearchBar;

import FormInput from "components/form-input/form-input.component";
import { ChangeEvent, useState } from "react";

function TopSearchBar({ searchText }: { searchText?: string }) {
  const [searchValue, setSearchValue] = useState(
    searchText == null ? "" : searchText
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  return (
    <FormInput
      value={searchValue}
      name="searchValue"
      className={`lg:w-[778px] ${searchText == null ? "" : "bg-white"}`}
      onChange={handleChange}
      type="search"
    />
  );
}

export default TopSearchBar;

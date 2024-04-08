import FormInput from "components/form-input/form-input.component";
import { ChangeEvent, useState } from "react";

function TopSearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  return (
    <FormInput
      value={searchValue}
      name="searchValue"
      className="lg:w-[778px]"
      onChange={handleChange}
      type="search"
    />
  );
}

export default TopSearchBar;

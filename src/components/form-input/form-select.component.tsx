import Select, { GroupBase, Props } from "react-select";

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  // const onChange = (
  //   option: OnChangeValue<Option, IsMulti>,
  //   actionMeta: ActionMeta<Option>
  // ) => {
  //   console.log(option);
  // };
  return (
    <Select
      closeMenuOnSelect={false}
      classNames={{
        control: (state) =>
          "p-1 bg-stone-500 dark:bg-woodsmoke-500 dark:bg-opacity-10 text-sm bg-opacity-10 placeholder-opacity-50 dark:placeholder-woodsmoke-500 dark:placeholder-opacity-50 rounded-[5px] border-transparent focus:ring-primary-500 focus:border-primary-500",
        menu: (state) => "dark:bg-woodsmoke-800",
        option: (state) =>
          state.isFocused
            ? "bg-primary-200 dark:bg-woodsmoke-900"
            : "dark:hover:text-woodsmoke-900",
      }}
      className="react-select-container text-black dark:text-white"
      classNamePrefix="react-select"
      {...props}
    />
  );
}

export default CustomSelect;

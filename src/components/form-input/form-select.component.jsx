import Select from "react-select";

function CustomSelect({ handleChange, options, ...props }) {
    return (<Select
        options={options}
        name="to"
        onChange={handleChange}
        classNames={{
            control: (state) => 'p-1 bg-stone-500 dark:bg-amber-500 dark:bg-opacity-10 text-sm bg-opacity-10 placeholder-opacity-50 dark:placeholder-amber-500 dark:placeholder-opacity-50 rounded-[5px] border-transparent focus:ring-pexo-orange-500 focus:border-pexo-orange-500',
            menu: (state) => 'dark:bg-jacarta-800',
            options: (state) => state.isSelected ? 'bg-amber-200' : 'hover:bg-amber-200',
        }}
        className="react-select-container text-black dark:text-white"
        classNamePrefix="react-select"
        {...props}
    />);
}

export default CustomSelect;
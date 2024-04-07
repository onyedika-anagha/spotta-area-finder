"use client";
import { InputHTMLAttributes, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { classNames } from "utils/helper/helper";
import { makeId } from "utils/helper/helper";
import { BiSearchAlt } from "react-icons/bi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  error?: boolean;
  errorMessage?: string;
}

function FormInput({
  label = null,
  error = false,
  errorMessage = "",
  ...otherProps
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const tempID = makeId(),
    className = classNames(
      otherProps.className != null ? otherProps.className : "",
      otherProps.type === "search" ? "pl-10" : "",
      "bg-[#F3F7FE] dark:bg-[#242428]",
      "border-transparent border-1 focus:border text-gray-900 text-sm rounded-lg focus:ring-primary-500",
      "focus:border-primary-500 block w-full p-2.5 placeholder-opacity-50 dark:placeholder-gray-400",
      "dark:placeholder-opacity-50 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-200"
    );
  return (
    <div>
      <label
        htmlFor={otherProps.id != null ? otherProps.id : `form-input-${tempID}`}
        className="block mb-2 text-gray-900 dark:text-white auth-input-label">
        {label}
      </label>
      <div className="relative">
        <input
          {...{
            ...otherProps,
            id: otherProps.id != null ? otherProps.id : `form-input-${tempID}`,
            type:
              otherProps.type == null
                ? "text"
                : otherProps.type !== "password"
                ? otherProps.type
                : showPassword
                ? "text"
                : "password",
            className,
          }}
        />
        {otherProps.type && otherProps.type === "password" && (
          <span
            className="p-1 absolute top-2.5 right-2.5"
            role="button"
            onClick={() => setShowPassword((state) => !state)}>
            {showPassword ? (
              <BsEyeSlash className="text-gray-500 dark:text-gray-400 font-bold" />
            ) : (
              <BsEye className="text-gray-500 dark:text-gray-400 font-bold" />
            )}
          </span>
        )}
        {otherProps.type && otherProps.type === "search" && (
          <span
            className="p-1 absolute top-2.5 left-2.5"
            role="button">
            <BiSearchAlt className="text-gray-500 dark:text-gray-400 font-bold" />
          </span>
        )}
      </div>
      {typeof otherProps.value === "string" &&
        otherProps.value?.length > 0 &&
        error && (
          <p className="form-error mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {errorMessage}
          </p>
        )}
    </div>
  );
}

export default FormInput;

import React from "react";
import searchIcon from "../../../assets/images/Landing/search.svg";

interface SearchBoxProps {
  placeholder: string;
  inputClasses?: string;
  isMarginTop?: boolean;
  display?: string;
}

const SearchBox = ({
  placeholder,
  inputClasses,
  isMarginTop,
  display,
}: SearchBoxProps) => {
  return (
    <div className={`${display} ${isMarginTop ? "mt-10" : ""}`}>
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder={placeholder}
          className={`outline-none px-3 pl-12 rounded-[8px] placeholder:text-text-2 dark:text-darkText w-[97%] h-[50px] ${inputClasses} dark:bg-gray-900`}
        />
        <img src={searchIcon} className="absolute left-6 lg:left-4 top-3" />
      </div>
    </div>
  );
};

export { SearchBox };

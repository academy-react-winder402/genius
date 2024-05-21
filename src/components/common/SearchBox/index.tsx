import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { useTimeOut } from "../../../hooks/useTimeOut";

import searchIcon from "../../../assets/images/Landing/search.svg";

interface SearchBoxProps {
  placeholder: string;
  inputClasses?: string;
  isMarginTop?: boolean;
  display?: string;
  isLanding?: boolean;
  isBlogs?: boolean;
  setQuery?: Dispatch<SetStateAction<string | undefined>>;
}

const SearchBox = ({
  placeholder,
  inputClasses,
  isMarginTop,
  display,
  isLanding,
  isBlogs,
  setQuery,
}: SearchBoxProps) => {
  const textTimeOut = useTimeOut();

  const searchBoxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    textTimeOut(() => setQuery && setQuery(e.target.value), 800);
  };

  return (
    <div className={`${display} ${isMarginTop ? "mt-10" : ""}`}>
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder={placeholder}
          className={`outline-none px-3 pl-12 rounded-[8px] placeholder:text-text-2 dark:text-darkText w-[97%] h-[50px] ${inputClasses} ${
            isBlogs === true &&
            "lg:!w-[779px] !shadow-courseDetailsHeroSectionSearchBoxShadow"
          } ${isLanding === true ? "dark:!bg-gray-800" : "dark:bg-gray-900"}`}
          onChange={searchBoxOnChange}
        />
        <img src={searchIcon} className="absolute left-6 lg:left-4 top-3" />
      </div>
    </div>
  );
};

export { SearchBox };

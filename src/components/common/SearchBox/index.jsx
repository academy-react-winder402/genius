import PropTypes from "prop-types";

import searchIcon from "../../../assets/images/Landing/search.svg";

const SearchBox = ({
  placeholder,
  inputWidth,
  inputClasses,
  isMarginTop,
  display,
}) => {
  return (
    <div className={`${display} ${isMarginTop ? "mt-10" : ""}`}>
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder={placeholder}
          className={`outline-none px-3 pl-12 rounded-[8px] placeholder:text-text-2 w-[97%] lg:w-[${inputWidth}] h-[50px] ${inputClasses}`}
        />
        <img src={searchIcon} className="absolute left-6 lg:left-4 top-3" />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  inputWidth: PropTypes.string,
  inputClasses: PropTypes.string,
  isMarginTop: PropTypes.bool,
  display: PropTypes.string,
};

export { SearchBox };

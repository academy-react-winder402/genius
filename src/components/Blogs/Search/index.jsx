import PropTypes from "prop-types";

import searchIcon from "../../../assets/images/Landing/search.svg";

const Search = ({ placeholder, inputClasses, isMarginTop, display }) => {
  return (
    <div className={`${display} ${isMarginTop ? "mt-10" : ""}`}>
      <div className="relative w-[100%] lg:w-auto flex justify-center">
        <input
          placeholder={placeholder}
          className={`outline-none px-3 pl-12 rounded-[16px] placeholder:text-text-2 w-[97%] lg:w-[300px] h-[50px] ${inputClasses}`}
        />
        <img src={searchIcon} className="absolute left-6 lg:left-44 top-3" />
      </div>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  inputClasses: PropTypes.string,
  isMarginTop: PropTypes.bool,
  display: PropTypes.string,
};

export { Search };

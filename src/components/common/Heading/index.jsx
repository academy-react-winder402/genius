import PropTypes from "prop-types";

import titleAfter from "../../../assets/images/Landing/LandingServices/title.svg";

const Heading = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center text-text1">
      <h3 className="font-[900] text-[40px]">{title}</h3>
      <img src={titleAfter} />
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
};

export { Heading };

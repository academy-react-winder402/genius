import PropTypes from "prop-types";

import { Link } from "../Link";

const MainButton = ({ text, href }) => {
  return (
    <Link
      to={href}
      className="bg-primary text-white w-[131px] h-[48px] rounded-full flex justify-center items-center"
    >
      {text}
    </Link>
  );
};

MainButton.propTypes = {
  text: PropTypes.any,
  href: PropTypes.string,
};

export { MainButton };

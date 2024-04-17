import PropTypes from "prop-types";

import { Link } from "../common/Link";

import logoImage from "../../assets/images/Header/logo.png";
import logoDarkImage from "../../assets/images/Header/logo-dark.svg";

const Logo = ({ isFilter, isDark }) => {
  return (
    <Link to="/">
      {isDark ? (
        <img src={logoDarkImage}  />
      ) : (
        <img src={logoImage} className={isFilter && "mix-blend-darken"} />
      )}
    </Link>
  );
};

Logo.propTypes = {
  isFilter: PropTypes.bool,
  isDark: PropTypes.bool,
};

export { Logo };

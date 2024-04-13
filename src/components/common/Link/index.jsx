import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";

import { handleScroll } from "../../../core/utils/scroll-helper.utils";

const Link = ({ children, className, to, ...rest }) => {
  return (
    <ReactRouterLink
      to={to}
      className={className}
      onClick={handleScroll}
      {...rest}
    >
      {children}
    </ReactRouterLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
};

export { Link };

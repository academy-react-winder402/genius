import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { LinkProps } from "../../../types/link-nav-link-props";

import { handleScroll } from "../../../core/utils/scroll-helper.utils";

const NavLink = ({ children, to, className, ...rest }: LinkProps) => {
  return (
    <ReactRouterNavLink
      to={to!}
      className={className}
      onClick={handleScroll}
      {...rest}
    >
      {children}
    </ReactRouterNavLink>
  );
};

export { NavLink };

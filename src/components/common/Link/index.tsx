import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { handleScroll } from "../../../core/utils/scroll-helper.utils";

interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  to?: string;
}

const Link = ({ children, className, to, ...rest }: LinkProps) => {
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

export { Link };

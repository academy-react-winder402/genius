import React from "react";

import { Link } from "../common/Link";
import { footerMenuItems } from "./footerMenuItems";

const FooterMenu = () => {
  return (
    <div className="mt-10 flex gap-5">
      {footerMenuItems.map((footerMenuItem) => (
        <div key={footerMenuItem.label} className="group">
          <Link to={footerMenuItem.href} className="footerMenuItems">
            {footerMenuItem.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { FooterMenu };

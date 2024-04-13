import { Link } from "../common/Link";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

import { menuItems } from "./menuItem";

const Menu = () => {
  return (
  <>
      <ul className="hidden lg:flex gap-[48px]">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <HeaderMobileMenu />
    </>
  );
};

export { Menu };

import { Link } from "../common/Link";

import { menuItems } from "./menuItem";

const Menu = () => {
  return (
    <ul className="flex gap-[48px]">
      {menuItems.map((item) => (
        <li key={item.label}>
          <Link to={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Menu };

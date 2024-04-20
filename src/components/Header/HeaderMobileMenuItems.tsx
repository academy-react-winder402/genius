import { ListItem } from "../common/ListItem";
import { List } from "../common/List";
import { ListItemButton } from "../common/List/ListItemButton";
import { menuItems } from "./menuItem";
import { Link } from "../common/Link";
import { Divider } from "../common/Divider";
import { Logo } from "./Logo";

const HeaderMobileMenuItems = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[70%]">
          <Logo />
        </div>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} className="flex-col gap-5" disablePadding>
            <ListItemButton className="w-full">
              <Link to={item.href} className="px-3 py-[4px] flex gap-3">
                {item.icon}
                {item.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export { HeaderMobileMenuItems };

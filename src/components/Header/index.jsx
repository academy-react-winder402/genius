import PropTypes from "prop-types";

import { BasketButton } from "./BasketButton";
import { LoginButton } from "./LoginButton";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

const Header = ({ isLanding }) => {
  return (
    <div
      className={`flex items-center justify-between py-[32px] px-[80px] ${
        isLanding && "bg-[#e3f2fd]"
      }`}
    >
      <Logo />
      <Menu />
      <div className="flex items-center gap-4">
        <BasketButton />
        <LoginButton />
      </div>
    </div>
  );
};

Header.propTypes = {
  isLanding: PropTypes.bool,
};

export { Header };

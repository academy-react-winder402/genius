import { Link } from "../common/Link";

import logoImage from "../../assets/images/Header/logo.png";

const Logo = () => {
  return (
    <div className="w-[13%]">
      <Link to="/">
        <img src={logoImage} className="mix-blend-darken" />
      </Link>
    </div>
  );
};

export { Logo };

import { Link } from "../common/Link";

import logoImage from "../../assets/images/Header/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} className="mix-blend-darken" />
    </Link>
  );
};

export { Logo };

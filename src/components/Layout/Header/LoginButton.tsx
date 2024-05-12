import { Link } from "react-router-dom";

import { useIsUserLogin } from "../../../redux/user-login";

const LoginButton = () => {
  const isLoggedIn = useIsUserLogin();

  return (
    <div>
      {isLoggedIn ? (
        <Link to="/dashboard" className="loginButton">
          حساب کاربری
        </Link>
      ) : (
        <Link to="/login" className="loginButton">
          ورود به حساب
        </Link>
      )}
    </div>
  );
};

export { LoginButton };

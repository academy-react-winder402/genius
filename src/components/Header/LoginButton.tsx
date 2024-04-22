import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <Link to="/login" className="loginButton">
        ورود به حساب
      </Link>
    </div>
  );
};

export { LoginButton };

import { Logo } from "../Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar">
        <Logo isFilter isDark />
        <SocialMedia />
      </div>
      <div className="lg:w-[63%] pt-10">
        <div className="flex flex-col items-center px-5">
          <h1 className="authToSiteText">
            ورود به حساب کاربری
          </h1>
          <p className="authToSiteDescription">
            لطفا نام و ایمیل خود را وارد نمایید.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export { Login };

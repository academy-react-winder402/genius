import { Logo } from "../Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[82%] mx-auto shadow-primaryShadow rounded-md overflow-hidden px-4 lg:px-0">
      <div className="bg-[#191b23] lg:w-[37%] lg:h-[500px] pt-14 pb-4 flex flex-col justify-between items-center rounded-t-md">
        <Logo isFilter isDark />
        <SocialMedia />
      </div>
      <div className="lg:w-[63%] pt-10">
        <div className="flex flex-col items-center px-5">
          <h1 className="font-[700] text-[30px] text-text1">
            ورود به حساب کاربری
          </h1>
          <p className="font-[400] text-text3">
            لطفا نام و ایمیل خود را وارد نمایید.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export { Login };

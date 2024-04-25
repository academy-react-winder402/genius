import { useState } from "react";

import { Logo } from "../Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { RegisterForm } from "./RegisterForm";

import { RegisterStep } from "./RegisterStep";
import { Link } from "../common/Link";

const Register = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="flex flex-col lg:flex-row lg:w-[82%] mx-auto shadow-primaryShadow rounded-md overflow-hidden px-4 lg:px-0">
      <div className="bg-[#191b23] lg:w-[37%] lg:h-[520px] pt-14 pb-4 flex flex-col justify-between items-center rounded-t-md">
        <div>
          <div className="pr-12">
            <Logo isFilter isDark />
          </div>
          <div className="flex flex-col gap-6 mt-3">
            <RegisterStep
              title="شماره موبایل"
              description="در این مرحله باید شماره موبایل خود را وارد نمایید."
              step={1}
              currentStep={currentStep}
            />
            <RegisterStep
              title="کد تایید"
              description="در این مرحله باید کد تایید را وارد نمایید."
              currentStep={currentStep}
              step={2}
            />
            <RegisterStep
              title="نام کاربری و پسورد"
              description="در این مرحله باید نام کاربری و پسور خود را انتخاب کنید."
              currentStep={currentStep}
              step={3}
            />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="lg:w-[63%] pt-10">
        <div className="flex flex-col items-center pt-6 px-5">
          <h1 className="font-[700] text-[30px] text-text1">ثبت نام در سایت</h1>
          <p className="font-[400] text-text3">
            برای ثبت نام باید سه مرحله را طی کنید
          </p>
          <RegisterForm
            currentStep={currentStep}
            setCurrentValue={setCurrentStep}
          />
          <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountText">
            حساب کاربری دارید؟{" "}
            <Link
              to="/login"
              className="doYouHaveAnyAccountOrDoNotHaveAccountLink"
            >
              وارد شوید
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export { Register };

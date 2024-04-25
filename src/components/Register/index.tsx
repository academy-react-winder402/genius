import { useState } from "react";

import { Logo } from "../Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { RegisterForm } from "./RegisterForm";

import { RegisterStep } from "./RegisterStep";

const Register = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar lg:h-[520px]">
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
        <div className="registerLeftSide">
          <h1 className="authToSiteText">ثبت نام در سایت</h1>
          <p className="authToSiteDescription">
            برای ثبت نام باید سه مرحله را طی کنید
          </p>
          <RegisterForm
            currentStep={currentStep}
            setCurrentValue={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
};

export { Register };

import { useState } from "react";

import { Logo } from "../Layout/Header/Logo";
import { SocialMedia } from "../common/SocialMedia";
import { ForgetPasswordForm } from "./ForgetPasswordForm";
import { FormStep } from "../common/FormStep";
import { AuthHeading } from "../common/AuthHeading";

const ForgetPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar h-[570px]">
        <div>
          <div className="pr-7">
            <Logo isFilter isDark />
          </div>
          <div className="flex flex-col gap-6 mt-3">
            <FormStep
              title="ایمیل"
              description="در این مرحله باید ایمیل خود را وارد نمایید."
              step={1}
              currentStep={currentStep}
            />
            <FormStep
              title="رمز عبور جدید"
              description="در این مرحله باید رمز عبور جدید خود را وارد نمایید."
              step={2}
              currentStep={currentStep}
            />
          </div>
        </div>
        <SocialMedia />
      </div>
      <div className="authTopSection">
        <div className="authHeadingFormWrapper">
          <AuthHeading
            title="بازگردانی رمز عبور"
            description="لطفا ایمیل خود را وارد نمایید."
          />
          <ForgetPasswordForm
            currentStep={currentStep}
            setCurrentValue={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword };

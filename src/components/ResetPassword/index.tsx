import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { resetConfirmValueAPI } from "../../core/services/api/forget-password/reset-confirm-value.api";

import { Logo } from "../Layout/Header/Logo";
import { AuthHeading } from "../common/AuthHeading";
import { SocialMedia } from "../common/SocialMedia";
import { ResetPasswordForm } from "./ResetPasswordForm";

const ResetPassword = () => {
  const [userId, setUserId] = useState<number>();

  const { configValue } = useParams();

  useEffect(() => {
    const fetchConfigValue = async () => {
      const response = await resetConfirmValueAPI(configValue!);

      setUserId(response.id);
    };

    if (configValue) fetchConfigValue();
  }, []);

  return (
    <div className="authPageWrapper">
      <div className="authPageSidebar h-[570px]">
        <div>
          <div className="pr-7">
            <Logo isFilter isDark />
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
          <ResetPasswordForm configValue={configValue} userId={userId!} />
        </div>
      </div>
    </div>
  );
};

export { ResetPassword };

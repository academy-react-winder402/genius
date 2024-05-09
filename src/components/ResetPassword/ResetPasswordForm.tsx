import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { forgetPasswordStepTwoFormSchema } from "../../core/validations/forget-password/forget-password-step-two-form";
import { resetPasswordAPI } from "../../core/services/api/auth/forget-password/reset-password.api";

import { toast } from "react-toastify";
import { FieldBox } from "../common/FieldBox";

interface ResetPasswordFormProps {
  configValue?: string;
  userId: number;
}

const ResetPasswordForm = ({ configValue, userId }: ResetPasswordFormProps) => {
  const navigate = useNavigate();

  const onSubmit = async (values: { newPassword: string }) => {
    try {
      if (configValue) {
        const resetConfirmValue = await toast.promise(
          resetPasswordAPI(userId, values.newPassword, configValue),
          {
            pending: "در حال بازگردانی رمز عبور ...",
          }
        );

        if (resetConfirmValue.success) {
          toast.success(resetConfirmValue.message);
          navigate("/login");
          toast.info("اکنون میتوانید وارد سایت شوید ...");
        } else {
          toast.error(resetConfirmValue.message);
        }
      }
    } catch (error) {
      toast.error("مشکلی در فرایند بازگردانی رمز عبور پیش آمد ...");
    }
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ newPassword: "" }}
      onSubmit={onSubmit}
      validationSchema={forgetPasswordStepTwoFormSchema}
    >
      {({ values }) => (
        <Form>
          <div className="authFormWrapper">
            <FieldBox
              type="password"
              label="رمز عبور جدید"
              name="newPassword"
              id="newPassword"
              placeholder="رمز عبور جدید"
              className="authInput"
              isPassword
            />
            <div className="forgetPasswordStepTwoSubmitButtonWrapper">
              <button type="button" className="mainButton rounded-md">
                مرحله قبل
              </button>
              <button
                type="submit"
                className={`forgetPasswordStepTwoSubmitButton ${
                  !values.newPassword && "authDisableButton"
                }`}
                disabled={!values.newPassword}
              >
                تغییر رمز عبور
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ResetPasswordForm };

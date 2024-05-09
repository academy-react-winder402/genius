import { Field, Formik } from "formik";
import AuthCode from "react-auth-code-input";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

import { verifyMessageAPI } from "../../../core/services/api/auth/register/verify-message.api";

import {
  onVerifyCodeChange,
  useRegisterSelector,
} from "../../../redux/register";

import { ErrorMessage } from "../../common/ErrorMessage";

interface RegisterStepTwoFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepTwoForm = ({ setCurrentValue }: RegisterStepTwoFormProps) => {
  const dispatch = useDispatch();
  const { phoneNumber, verifyCode: registerVerifyCode } = useRegisterSelector();

  const onSubmit = async (values: { verifyCode: string }) => {
    try {
      dispatch(onVerifyCodeChange(values.verifyCode));
      const verifyCode = await toast.promise(
        verifyMessageAPI(phoneNumber, registerVerifyCode),
        {
          pending: "کد تایید در حال بررسی می باشد ...",
        }
      );
      if (verifyCode.success) {
        toast.success("کد تایید شما با موفقیت تایید شد !");
        setCurrentValue(3);
      } else toast.error(verifyCode.message);
    } catch (error) {
      toast.error("مشکلی در بررسی کد تایید پیش آمد !");
    }
  };

  return (
    <div>
      <h4 className="registerCodeNotSend">
        کد به شماره {phoneNumber} کد ارسال نشد؟{" "}
        <button
          className="text-primaryColor"
          onClick={() => setCurrentValue(1)}
        >
          ارسال دوباره
        </button>{" "}
      </h4>
      <Formik
        initialValues={{
          verifyCode: "",
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="registerStepTwoPhoneNumberInputWrapper">
              <Field
                name="verifyCode"
                render={({ fields }: any) => (
                  <AuthCode
                    onChange={(e) => dispatch(onVerifyCodeChange(e))}
                    inputClassName="authPhoneNumberInput"
                    containerClassName="authPhoneNumberInputContainer"
                    length={5}
                    {...fields}
                  />
                )}
              />
              <ErrorMessage name="verifyCode" />
            </div>
            <span className="authSendVerificationCodeTime">1:34</span>
            <div className="registerStepTwoThreeSubmitButtonWrapper">
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(1)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                disabled={registerVerifyCode === ""}
                className={`registerSubmitButton ${
                  !registerVerifyCode && "authDisableButton"
                }`}
              >
                ارسال کد تایید
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { RegisterStepTwoForm };

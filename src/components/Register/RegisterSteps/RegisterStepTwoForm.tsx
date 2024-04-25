import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  onVerifyCodeChange,
  useRegisterSelector,
} from "../../../redux/register";
import AuthCode from "react-auth-code-input";

import { registerStepTwoFormSchema } from "../../../core/validations/register/register-step-two-form.validation-three";

interface RegisterStepTwoFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepTwoForm = ({ setCurrentValue }: RegisterStepTwoFormProps) => {
  const dispatch = useDispatch();
  const { phoneNumber, verifyCode: registerVerifyCode } = useRegisterSelector();

  const onSubmit = (values: { verifyCode: string }) => {
    dispatch(onVerifyCodeChange(values.verifyCode));
    console.log({ phoneNumber, registerVerifyCode });
  };

  return (
    <div>
      <h4 className="font-[500] text-[14px] text-text2 dark:text-darkText mt-5">
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
        validationSchema={registerStepTwoFormSchema}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="flex flex-col items-center gap-4 mt-5">
              <Field
                name="verifyCode"
                render={() => (
                  <AuthCode
                    onChange={(e) => dispatch(onVerifyCodeChange(e))}
                    inputClassName="authPhoneNumberInput"
                    containerClassName="authPhoneNumberInputContainer"
                  />
                )}
              />
              <ErrorMessage name="verifyCode" component="p" />
            </div>
            <span className="authSendVerificationCodeTime">
              1:34
            </span>
            <div className="flex gap-3 justify-center items-center mt-7">
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(1)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                onClick={() => {
                  handleSubmit();
                  setCurrentValue(3);
                }}
                disabled={registerVerifyCode === ""}
                className={`mainButton w-[200px] h-[50px] rounded-md ${
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

import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

import { sendVerificationMessageAPI } from "../../../core/services/api/register/send-verification-message.api";
import { registerStepOneFormSchema } from "../../../core/validations/register/register-step-one-form.validation";

import {
  onPhoneNumberChange,
  useRegisterSelector,
} from "../../../redux/register";

import { FieldBox } from "../../common/FieldBox";
import { Link } from "../../common/Link";

interface RegisterStepOneFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepOneForm = ({ setCurrentValue }: RegisterStepOneFormProps) => {
  const dispatch = useDispatch();
  const { phoneNumber } = useRegisterSelector();

  const onSubmit = async (values: { phoneNumber: string }) => {
    const { phoneNumber } = values;

    try {
      dispatch(onPhoneNumberChange(phoneNumber));

      const sendVerificationMessage = await toast.promise(
        sendVerificationMessageAPI(phoneNumber),
        {
          pending: "کد تایید در حال ارسال است ...",
        }
      );
      if (sendVerificationMessage.success) {
        toast.success("کد تایید با موفقیت ارسال شد !");
        setCurrentValue(2);
      } else toast.error(sendVerificationMessage.message);
    } catch (error) {
      toast.error("مشکلی در ارسال کد تایید به وجود آمد !");
    }
  };

  return (
    <div className="registerStepOneWrapper">
      <Formik
        initialValues={{
          phoneNumber: phoneNumber || "",
        }}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={registerStepOneFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="registerStepOneFormWrapper">
            <Form>
              <FieldBox
                type="phone"
                label="شماره موبایل"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="شماره موبایل"
                className="authInput"
              />
              <div className="registerStepOneSubmitButtonWrapper">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit();
                    e.preventDefault();
                  }}
                  disabled={!values.phoneNumber}
                  className={`registerSubmitButton ${
                    !values.phoneNumber && "authDisableButton"
                  }`}
                >
                  دریافت کد تایید
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText mt-5">
        حساب کاربری دارید؟{" "}
        <Link to="/login" className="doYouHaveAnyAccountOrDoNotHaveAccountLink">
          وارد شوید
        </Link>
      </h5>
    </div>
  );
};

export { RegisterStepOneForm };

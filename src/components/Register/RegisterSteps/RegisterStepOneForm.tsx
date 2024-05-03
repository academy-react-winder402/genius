import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import { registerStepOneFormSchema } from "../../../core/validations/register/register-step-one-form.validation";

import {
  onPhoneNumberChange,
  useRegisterSelector,
} from "../../../redux/register";

import { ErrorMessage } from "../../common/ErrorMessage";
import { Link } from "../../common/Link";

interface RegisterStepOneFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepOneForm = ({ setCurrentValue }: RegisterStepOneFormProps) => {
  const dispatch = useDispatch();
  const { phoneNumber } = useRegisterSelector();

  const onSubmit = (values: { phoneNumber: string }) => {
    dispatch(onPhoneNumberChange(values.phoneNumber));
    console.log(values);
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <Formik
        initialValues={{
          phoneNumber: phoneNumber || "",
        }}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={registerStepOneFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="mt-7 flex flex-col items-center gap-3">
            <Form>
              <div className="formFieldWrapperAndPaginatedWrapper">
                <Field
                  name="phoneNumber"
                  type="phone"
                  placeholder="شماره موبایل"
                  className="authInput"
                />
                <ErrorMessage name="phoneNumber" />
              </div>
              <div className="flex justify-center mt-7">
                <button
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                    setCurrentValue(2);
                  }}
                  disabled={!values.phoneNumber}
                  className={`mainButton w-[200px] h-[50px] rounded-md ${
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

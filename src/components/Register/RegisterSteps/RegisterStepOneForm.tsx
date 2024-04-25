import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerStepOneFormSchema } from "../../../core/validations/register/register-step-one-form.validation";

import {
  onPhoneNumberChange,
  useRegisterSelector,
} from "../../../redux/register";

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
    <div>
      <Formik
        initialValues={{
          phoneNumber: phoneNumber || "",
        }}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={registerStepOneFormSchema}
      >
        {({ values, handleSubmit }) => (
          <Form>
            <div className="flex flex-col items-center gap-4 mt-5">
              <Field
                name="phoneNumber"
                type="phone"
                placeholder="شماره موبایل"
                className="authInput"
              />
              <ErrorMessage name="phoneNumber" component="p" />
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
        )}
      </Formik>
    </div>
  );
};

export { RegisterStepOneForm };

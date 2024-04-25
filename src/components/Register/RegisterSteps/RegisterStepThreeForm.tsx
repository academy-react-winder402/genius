import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-router-dom";

import { useRegisterSelector } from "../../../redux/register";

import { registerStepThreeFormSchema } from "../../../core/validations/register/register-step-three-form.validation-three";

interface RegisterStepThreeFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepThreeForm = ({
  setCurrentValue,
}: RegisterStepThreeFormProps) => {
  const { phoneNumber } = useRegisterSelector();

  const onSubmit = (values: { password: string; gmail: string }) => {
    console.log({ phoneNumber, ...values });
  };

  return (
    <div>
      <Formik
        initialValues={{
          password: "",
          gmail: "",
        }}
        onSubmit={onSubmit}
        validationSchema={registerStepThreeFormSchema}
      >
        {({ values, handleSubmit }) => (
          <Form>
            <div className="flex flex-col items-center gap-4 mt-5">
              <Field
                name="password"
                type="text"
                placeholder="رمز عبور"
                className="authInput"
              />
              <ErrorMessage name="password" component="p" />
            </div>
            <div className="flex flex-col items-center gap-4 mt-5">
              <Field
                name="gmail"
                type="email"
                placeholder="ایمیل"
                className="authInput"
              />
              <ErrorMessage name="gmail" component="p" />
            </div>
            <div className="flex gap-3 justify-center items-center mt-7">
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(2)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit();
                  e.preventDefault();
                }}
                disabled={!values.password || !values.gmail}
                className={`mainButton w-[200px] h-[50px] rounded-md ${
                  (!values.password || !values.gmail) && "authDisableButton"
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

export { RegisterStepThreeForm };

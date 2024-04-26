import { ErrorMessage, Field, Form, Formik } from "formik";

import { forgotPasswordStepOneFormSchema } from "../../../core/validations/forgot-password/forgot-password-step-one-form";

interface ForgotPasswordStepOneFormProps {
  setCurrentValue: (value: number) => void;
}

const ForgotPasswordStepOneForm = ({
  setCurrentValue,
}: ForgotPasswordStepOneFormProps) => {
  const onSubmit = (values: { email: string }) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={onSubmit}
      validationSchema={forgotPasswordStepOneFormSchema}
    >
      {({ values, handleSubmit }) => (
        <Form>
          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col w-full">
              <p className="font-bold">ایمیل</p>
              <Field
                name="email"
                type="email"
                placeholder="ایمیل"
                className="authInput"
              />
              <ErrorMessage
                name="email"
                className="text-[14px] text-[red]"
                component="p"
              />
            </div>
            <button
              type="submit"
              className={`bg-primary text-white h-[40px] rounded-md shadow-primaryShadow mt-2 cursor-pointer ${
                !values.email && "authDisableButton"
              }`}
              onClick={() => {
                setCurrentValue(2);
                handleSubmit();
              }}
              disabled={!values.email}
            >
              بازگردانی رمز عبور
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ForgotPasswordStepOneForm };

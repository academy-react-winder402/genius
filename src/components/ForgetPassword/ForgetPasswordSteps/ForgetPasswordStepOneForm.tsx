import { Field, Form, Formik } from "formik";

import { forgetPasswordStepOneFormSchema } from "../../../core/validations/forget-password/forget-password-step-one-form";

import { ErrorMessage } from "../../common/ErrorMessage";

interface ForgetPasswordStepOneFormProps {
  setCurrentValue: (value: number) => void;
}

const ForgetPasswordStepOneForm = ({
  setCurrentValue,
}: ForgetPasswordStepOneFormProps) => {
  const onSubmit = (values: { email: string }) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={onSubmit}
      validationSchema={forgetPasswordStepOneFormSchema}
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
              <ErrorMessage name="email" />
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

export { ForgetPasswordStepOneForm };

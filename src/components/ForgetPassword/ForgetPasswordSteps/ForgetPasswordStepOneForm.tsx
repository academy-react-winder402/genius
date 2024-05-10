import { Form, Formik } from "formik";

import { forgetPasswordStepOneFormSchema } from "../../../core/validations/forget-password/forget-password-step-one-form";

import { FieldBox } from "../../common/FieldBox";

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
          <div className="forgetPasswordStepOneFieldWrapper">
            <FieldBox
              type="email"
              label="ایمیل"
              name="email"
              id="email"
              placeholder="ایمیل"
              className="authInput"
            />
            <button
              type="submit"
              className={`forgetPasswordStepOneSubmitButton ${
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

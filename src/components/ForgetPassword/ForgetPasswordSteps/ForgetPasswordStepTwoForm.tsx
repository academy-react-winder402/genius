import { Form, Formik } from "formik";

import { forgetPasswordStepTwoFormSchema } from "../../../core/validations/forget-password/forget-password-step-two-form";

import { FieldBox } from "../../common/FieldBox";

interface ForgetPasswordStepTwoFormProps {
  setCurrentValue: (value: number) => void;
}

const ForgetPasswordStepTwoForm = ({
  setCurrentValue,
}: ForgetPasswordStepTwoFormProps) => {
  const onSubmit = (values: { newPassword: string }) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ newPassword: "" }}
      onSubmit={onSubmit}
      validationSchema={forgetPasswordStepTwoFormSchema}
    >
      {({ values, handleSubmit }) => (
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
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(1)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                className={`forgetPasswordStepTwoSubmitButton ${
                  !values.newPassword && "authDisableButton"
                }`}
                onClick={() => {
                  setCurrentValue(2);
                  handleSubmit();
                }}
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

export { ForgetPasswordStepTwoForm };

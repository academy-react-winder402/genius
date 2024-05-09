import { Form, Formik } from "formik";
import { toast } from "react-toastify";

import { sendEmailAPI } from "../../core/services/api/forget-password/send-email.api";
import { forgetPasswordStepOneFormSchema } from "../../core/validations/forget-password/forget-password-step-one-form";

import { FieldBox } from "../common/FieldBox";

const ForgetPasswordForm = () => {
  const onSubmit = async (values: { email: string }) => {
    const sendEmail = await toast.promise(
      sendEmailAPI(values.email, "http://localhost:5173/reset-password"),
      {
        pending: "در حال بررسی ایمیل ...",
      }
    );

    if (sendEmail.success) toast.success("ایمیل با موفقیت ارسال شد !");
    else toast.error(sendEmail.errors[0]);
  };

  return (
    <div className="forgetPasswordFormWrapper">
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
                disabled={!values.email}
              >
                بازگردانی رمز عبور
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ForgetPasswordForm };

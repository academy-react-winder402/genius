import { Field, Formik } from "formik";
import { Form } from "react-router-dom";

import { useRegisterSelector } from "../../../redux/register";

import { registerStepThreeFormSchema } from "../../../core/validations/register/register-step-three-form.validation-three";

import { ErrorMessage } from "../../common/ErrorMessage";
import { PasswordInput } from "../../common/PasswordInput";

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
    <div className="w-full flex justify-center">
      <Formik
        initialValues={{
          password: "",
          gmail: "",
        }}
        onSubmit={onSubmit}
        validationSchema={registerStepThreeFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="mt-7 flex flex-col gap-3">
            <Form>
              <div className="flex flex-col w-full gap-3">
                <PasswordInput isRegister />
                <div className="formFieldWrapperAndPaginatedWrapper">
                  <Field
                    name="gmail"
                    type="email"
                    placeholder="ایمیل"
                    className="authInput"
                  />
                  <ErrorMessage name="gmail" />
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
                    ثبت نام
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export { RegisterStepThreeForm };

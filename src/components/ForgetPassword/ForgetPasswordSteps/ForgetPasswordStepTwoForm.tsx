import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

import { forgetPasswordStepTwoFormSchema } from "../../../core/validations/forget-password/forget-password-step-two-form";

import { ErrorMessage } from "../../common/ErrorMessage";

interface ForgetPasswordStepTwoFormProps {
  setCurrentValue: (value: number) => void;
}

const ForgetPasswordStepTwoForm = ({
  setCurrentValue,
}: ForgetPasswordStepTwoFormProps) => {
  const [isPassword, setIsPassword] = useState(true);

  const handleIsPasswordChange = () => setIsPassword((prevValue) => !prevValue);

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
          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col w-full relative">
              <p className="font-bold">رمز عبور جدید</p>
              <Field
                name="newPassword"
                type={isPassword ? "password" : "text"}
                placeholder="رمز عبور جدید"
                className="authInput"
              />
              <div className="absolute top-11 left-2 cursor-pointer">
                {isPassword ? (
                  <VisibilityOffIcon onClick={handleIsPasswordChange} />
                ) : (
                  <VisibilityIcon onClick={handleIsPasswordChange} />
                )}
              </div>
              <ErrorMessage name="newPassword" />
            </div>
            <div className="flex gap-3 justify-center items-center mt-5 w-full">
              <button
                type="button"
                className="mainButton rounded-md"
                onClick={() => setCurrentValue(1)}
              >
                مرحله قبل
              </button>
              <button
                type="submit"
                className={`bg-primary text-white w-[200px] h-[50px] rounded-md shadow-primaryShadow cursor-pointer ${
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

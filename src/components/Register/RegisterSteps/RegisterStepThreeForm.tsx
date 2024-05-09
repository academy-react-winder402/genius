import { Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useRegisterSelector } from "../../../redux/register";

import { REGISTER_STEP_THREE_FORM } from "../../../core/data/register/register-step-three-form";
import { registerAPI } from "../../../core/services/api/auth/register/register.api";
import { registerStepThreeFormSchema } from "../../../core/validations/register/register-step-three-form.validation-three";

import { FieldBox } from "../../common/FieldBox";

interface RegisterStepThreeFormProps {
  setCurrentValue: (step: number) => void;
}

const RegisterStepThreeForm = ({
  setCurrentValue,
}: RegisterStepThreeFormProps) => {
  const navigate = useNavigate();

  const { phoneNumber } = useRegisterSelector();

  const onSubmit = async (values: { password: string; gmail: string }) => {
    try {
      const { password, gmail } = values;

      const registerUser = await toast.promise(
        registerAPI(password, gmail, phoneNumber),
        {
          pending: "شما در حال ثبت نام می باشید ...",
        }
      );
      if (registerUser.success) {
        toast.success("شما با موفقیت ثبت نام شدید !");
        navigate("/login");
        toast.info("اکنون میتوانید در سایت وارد شوید !");
      } else {
        toast.error("مشکلی در فرایند ثبت نام به وجود آمد !");
      }
    } catch (error) {
      toast.error("مشکلی در فرایند ثبت نام به وجود آمد !");
    }
  };

  return (
    <div className="registerStepThreeWrapper">
      <Formik
        initialValues={{
          password: "",
          gmail: "",
        }}
        onSubmit={onSubmit}
        validationSchema={registerStepThreeFormSchema}
      >
        {({ values, handleSubmit }) => (
          <div className="authFormWrapper">
            <Form>
              <div className="registerStepThreeFieldsWrapper">
                {REGISTER_STEP_THREE_FORM.map((field) => (
                  <FieldBox
                    key={field.id}
                    type={field.type}
                    label={field.label}
                    name={field.name}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={field.className}
                    isPassword={field.isPassword}
                  />
                ))}
                <div className="registerStepTwoThreeSubmitButtonWrapper">
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
                    className={`registerSubmitButton ${
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

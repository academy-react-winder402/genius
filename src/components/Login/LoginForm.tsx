import { Form, Formik } from "formik";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { loginFormInterface } from "../../types/login-form";

import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";

const LoginForm = () => {
  const onSubmit = (values: loginFormInterface) => {
    console.log(values);
  };

  return (
    <div className="w-full flex justify-center">
      <Formik
        initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        <Form>
          <div className="loginRegisterStepThreeFormWrapper">
            {LOGIN_FORM.map((field) => (
              <FieldBox
                key={field.id}
                type={field.type}
                label={field.label}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                className={field.className!}
                wrapperClassName={field.wrapperClassName}
                isPassword={field.isPassword}
                isCheckbox={field.isCheckbox}
                isLogin
              />
            ))}
            <button className="loginSubmitButton" type="submit">
              ورود
            </button>
            <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText mt-1">
              حساب کاربری ندارید؟{" "}
              <Link
                to="/register"
                className="doYouHaveAnyAccountOrDoNotHaveAccountLink"
              >
                ثبت نام{" "}
              </Link>
            </h5>
            <span className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
              یا
            </span>
            <h5 className="doYouHaveAnyAccountOrDoNotHaveAccountOrForgetPasswordText -mt-1">
              رمز عبور خود را فراموش کرده اید ؟{" "}
              <Link to="/forget-password" className="text-primaryColor">
                تغییر
              </Link>
            </h5>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { LoginForm };

import { Form, Formik } from "formik";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { UserDataInterface } from "../../types/login/user-data";

import { useLogin } from "../../hooks/auth/login/useLogin";
import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";

const LoginForm = () => {
  const loginUser = useLogin();

  const onSubmit = async (values: UserDataInterface) => {
    loginUser.mutate(values);
  };

  return (
    <div className="w-full flex justify-center">
      <Formik
        initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        <Form>
          <div className="authFormWrapper">
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

import { Field, Form, Formik } from "formik";
import { useState } from "react";

import { loginFormSchema } from "../../core/validations/login-form.validation";

import { ErrorMessage } from "../common/ErrorMessage";
import { Link } from "../common/Link";
import { PasswordInput } from "../common/PasswordInput";

const LoginForm = () => {
  const [isPassword, setIsPassword] = useState(true);

  const handleIsPasswordChange = () => setIsPassword((prevValue) => !prevValue);

  const onSubmit = (values: {
    phoneOrGmail: string;
    password: string;
    rememberMe: boolean;
  }) => {
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
          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col w-full">
              <p className="font-bold">ایمیل یا شماره موبایل</p>
              <Field
                name="phoneOrGmail"
                placeholder="ایمیل یا شماره موبایل"
                className="authInput"
              />
              <ErrorMessage name="phoneOrGmail" />
            </div>
            <PasswordInput showLabel />
            <div>
              <div className="flex gap-2">
                <Field type="checkbox" name="rememberMe" />
                <p className="font-bold mt-1">مرا به خاطر بسپار</p>
              </div>
              <ErrorMessage name="rememberMe" />
            </div>
            <button
              className="bg-primary text-white h-[40px] rounded-md shadow-primaryShadow mt-2 cursor-pointer"
              type="submit"
            >
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

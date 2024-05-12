import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { loginAPI } from "../../core/services/api/auth/login.api";
import { setItem } from "../../core/services/common/storage.services";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { isUserLoginChange } from "../../redux/user-login";

import { UserDataInterface } from "../../types/login/user-data";

import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values: UserDataInterface) => {
    try {
      const user = await toast.promise(loginAPI(values), {
        pending: "شما در حال ورود می باشید ...",
      });
      if (user.success) {
        setItem("token", user.token);
        dispatch(isUserLoginChange(true));
        toast.success("در حال انتقال به پنل کاربری ...");
        window.location.pathname = "/dashboard";
      } else {
        toast.error(user.message);
      }
    } catch (error) {
      toast.error("مشکلی در فرایند ورود به وجود آمد !");
    }
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

import { Form, Formik } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { LOGIN_FORM } from "../../core/data/login/login-form";
import { loginFormSchema } from "../../core/validations/login-form.validation";

import { UserDataInterface } from "../../types/login/user-data";

import { useLogin } from "../../hooks/auth/login/useLogin";
import { FieldBox } from "../common/FieldBox";
import { Link } from "../common/Link";
import {
  isTwoStepAuthChange,
  useIsTwoStepAuth,
} from "../../redux/isTwoStepAuth";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginForm = () => {
  const loginUser = useLogin();
  const isTwoStepAuth = useIsTwoStepAuth();
  const dispatch = useDispatch();

  const onSubmit = async (values: UserDataInterface) => {
    loginUser.mutate(values);

    console.log(isTwoStepAuth);
  };

  const handleClose = () => {
    dispatch(isTwoStepAuthChange(false));
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

import { ErrorMessage, Field, Form, Formik } from "formik";

import { loginFormSchema } from "../../core/validations/login-form.validation";

const LoginForm = () => {
  const onSubmit = (values: {
    userName: string;
    email: string;
    rememberMe: boolean;
  }) => {
    console.log(values);
  };

  return (
    <div className="w-full flex justify-center">
      <Formik
        initialValues={{ userName: "", email: "", rememberMe: true }}
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        <Form>
          <div className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col w-full">
              <p className="font-bold">نام کاربری</p>
              <Field
                name="userName"
                placeholder="نام کاربری"
                className="outline-none w-[370px] h-[40px] border-[1px] border-primaryBorder rounded-md px-5 my-2"
              />
              <ErrorMessage
                name="userName"
                className="!text-red-500"
                component="p"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="font-bold">ایمیل</p>
              <Field
                name="email"
                type="email"
                placeholder="ایمیل"
                className="outline-none lg:w-[370px] h-[40px] border-[1px] border-primaryBorder rounded-md px-5 my-2"
              />
              <ErrorMessage
                name="userName"
                className="!text-red-500"
                component="p"
              />
            </div>
            <div className="dled">
              <div className="flex gap-2">
                <Field type="checkbox" name="rememberMe" />
                <p className="font-bold mt-1">مرا به خاطر بسپار</p>
              </div>
              <ErrorMessage name="rememberMe">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>
            <button
              className="bg-primary text-white h-[40px] rounded-md shadow-primaryShadow mt-2"
              type="submit"
            >
              ورود
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { LoginForm };

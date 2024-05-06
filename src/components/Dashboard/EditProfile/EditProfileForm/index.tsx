import { Formik, Form, Field, ErrorMessage } from "formik";

import { editProfileFormProp } from "../../../../core/validations/EditProfile/EditProfileValidation";

const EditProfileForm = ({ setCurrentValue }: editProfileFormProp) => {
  const onSubmit = (values: {
    email: string;
    number: string;
    date: string;
    name: string;
    lastName: string;
    code: string;
  }) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          number: "",
          date: "",
          name: "",
          lastName: "",
          code: "",
        }}
        onSubmit={onSubmit}
        validationSchema={editProfileFormProp}
      >
        <Form>
          <div className=" relative">
            <Field
              name="name"
              type="text"
              placeholder="نام"
              className=" absolute -bottom-10 left-60 border-2 border-slate-300 px-1 rounded-md lg:left-52 lg:-bottom-[123px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="lastName"
              type="text"
              placeholder="نام خانوادگی"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 px-1 rounded-md lg:-left-10 lg:-bottom-[87px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="code"
              type="text"
              placeholder="کد ملی"
              className=" relative -bottom-10 left-60 border-2 border-slate-300 px-1 rounded-md lg:-left-72 lg:-bottom-[51px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="email"
              type="email"
              placeholder="ایمیل"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 px-1 rounded-md lg:left-52 lg:-bottom-[124px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="date"
              type="text"
              placeholder="تاریخ تولد"
              className=" relative -bottom-10 left-60 border-2 border-slate-300 px-1 rounded-md lg:-left-10 lg:-bottom-[87px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="number"
              type="text"
              placeholder="شماره موبایل"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 px-1 rounded-md lg:-left-72 lg:-bottom-[51px] lg:h-9"
            />
          </div>
          <div>
            <button
              type="submit"
              className=" relative -bottom-10 left-60 rounded-md bg-blue-500 text-cyan-50 w-32 h-10 hover:bg-blue-400 lg:left-52 lg:-bottom-[100px]"
            >
              ثبت اطلاعات
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export { EditProfileForm };

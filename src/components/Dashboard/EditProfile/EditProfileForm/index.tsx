import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditProfileForm = ({ onSubmit }) => {
  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    lastName: yup.string().required("این فیلد اجباریست"),
    code: yup.number().required("این فیلد عددی اجباریست"),
    email: yup.string().required("این فیلد اجباریست"),
    date: yup.date().required("این فیلد تاریخ اجباریست"),
    number: yup.number().required("این فیلد عددی اجباریست"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          Code: "",
          email: "",
          date: "",
          number: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form>
          <div className=" relative">
            <Field
              name="name"
              type="text"
              placeholder="نام"
              className=" absolute -bottom-10 left-60 border-2 border-slate-300 rounded-md lg:left-72 lg:-bottom-[123px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="lastName"
              type="text"
              placeholder="نام خانوادگی"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 rounded-md lg:left-5 lg:-bottom-[87px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="code"
              type="text"
              placeholder="کد ملی"
              className=" relative -bottom-10 left-60 border-2 border-slate-300 rounded-md lg:-left-60 lg:-bottom-[51px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="email"
              type="email"
              placeholder="ایمیل"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 rounded-md lg:left-72 lg:-bottom-[124px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="date"
              type="text"
              placeholder="تاریخ تولد"
              className=" relative -bottom-10 left-60 border-2 border-slate-300 rounded-md lg:left-5 lg:-bottom-[87px] lg:h-9"
            />
          </div>
          <div>
            <Field
              name="number"
              type="text"
              placeholder="شماره موبایل"
              className=" relative -bottom-4 left-8 border-2 border-slate-300 rounded-md lg:-left-60 lg:-bottom-[51px] lg:h-9"
            />
          </div>
          <div>
            <button
              type="submit"
              className=" relative -bottom-10 left-60 rounded-md bg-blue-500 text-cyan-50 w-32 h-10 hover:bg-blue-400 lg:left-60 lg:-bottom-[137px]"
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

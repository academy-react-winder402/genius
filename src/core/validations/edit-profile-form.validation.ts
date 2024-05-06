import * as yup from "yup";

export const editProfileFormSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  nationalCode: yup.string().required("لطفا کد ملی خود را وارد کنید"),
  email: yup.string().required("لطفا ایمیل خود را وارد کنید"),
  birthdayDate: yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
  phoneNumber: yup.string().required("لطفا شماره موبایل خود را وارد کنید"),
});

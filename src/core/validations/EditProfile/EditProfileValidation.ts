import * as yup from "yup";

export const editProfileFormProp = yup.object().shape({
  name: yup.string().required("این فیلد اجباریست"),
  lastName: yup.string().required("این فیلد اجباریست"),
  code: yup.number().required("این فیلد عددی اجباریست"),
  email: yup.string().required("این فیلد اجباریست"),
  date: yup.date().required("این فیلد تاریخ اجباریست"),
  number: yup.number().required("این فیلد عددی اجباریست"),
});

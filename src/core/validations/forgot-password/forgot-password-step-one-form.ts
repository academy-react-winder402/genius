import * as yup from "yup";

export const forgotPasswordStepOneFormSchema = yup.object().shape({
  email: yup.string().required("ایمیل الزامی می باشد."),
});

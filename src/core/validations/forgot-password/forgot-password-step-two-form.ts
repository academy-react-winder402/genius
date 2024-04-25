import * as yup from "yup";

export const forgotPasswordStepTwoFormSchema = yup.object().shape({
  newPassword: yup.string().required("رمز عبور جدید الزامی می باشد."),
});

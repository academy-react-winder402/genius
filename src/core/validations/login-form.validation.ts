import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  userName: yup.string().required("این فیلد الزامی می باشد."),
  email: yup.string().required("این فیلد الزامی می باشد."),
  rememberMe: yup.boolean(),
});

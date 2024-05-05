import * as yup from "yup";

export const registerStepTwoFormSchema = yup.object({
  verifyCode: yup.string().required('این فیلد الزامی می باشد.'),
});

import * as yup from "yup";

export const registerStepOneFormSchema = yup.object({
  phoneNumber: yup.string(),
});

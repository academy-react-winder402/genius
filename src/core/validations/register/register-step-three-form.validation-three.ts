import * as yup from "yup";

export const registerStepThreeFormSchema = yup.object({
  password: yup.string(),
  gmail: yup.string(),
});

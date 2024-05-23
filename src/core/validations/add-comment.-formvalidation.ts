import * as yup from "yup";

export const addCommentFormSchema = yup.object().shape({
  describe: yup
    .string()
    .required("این فیلد الزامی می باشد")
    .min(5, "نظر شما نمی تواند کمتر از 5 کاراکتر باشد"),
});

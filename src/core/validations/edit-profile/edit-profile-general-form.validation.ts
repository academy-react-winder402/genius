import * as yup from "yup";

export const editProfileGeneralFormSchema = yup.object().shape({
  firstName: yup.string().required("این فیلد الزامی می باشد"),
  lastName: yup.string().required("این فیلد الزامی می باشد"),
  nationalCode: yup.string().required("این فیلد الزامی می باشد"),
  email: yup.string().required("این فیلد الزامی می باشد"),
  birthdayDate: yup.string().required("این فیلد الزامی می باشد"),
  phoneNumber: yup.string().required("این فیلد الزامی می باشد"),
});

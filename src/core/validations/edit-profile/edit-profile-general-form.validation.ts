import * as yup from "yup";

export const editProfileGeneralFormSchema = yup.object().shape({
  FName: yup.string().required("این فیلد الزامی می باشد"),
  LName: yup.string().required("این فیلد الزامی می باشد"),
  NationalCode: yup.string().required("این فیلد الزامی می باشد"),
  email: yup.string().required("این فیلد الزامی می باشد"),
  BirthDay: yup.string().required("این فیلد الزامی می باشد"),
  phoneNumber: yup.string().required("این فیلد الزامی می باشد"),
  userAbout: yup.string().required("این فیلد الزامی می باشد"),
  HomeAdderess: yup.string().required("این فیلد الزامی می باشد"),
  LinkdinProfile: yup.string().required("این فیلد الزامی می باشد"),
  TelegramLink: yup.string().required("این فیلد الزامی می باشد"),
  ReceiveMessageEvent: yup.bool().required("این فیلد الزامی می باشد"),
  Gender: yup.bool().required("این فیلد الزامی می باشد"),
});

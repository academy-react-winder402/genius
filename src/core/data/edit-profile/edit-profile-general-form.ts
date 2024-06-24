import { EditProfileGeneralFormFieldsInterface } from "../../../types/edit-profile/edit-profile-general-form-fields";

export const EDIT_PROFILE_GENERAL_FORM: EditProfileGeneralFormFieldsInterface[] =
  [
    {
      label: "نام",
      type: "text",
      name: "FName",
      id: "FName",
      className: "editProfileFormInput",
    },
    {
      label: "نام خانواردگی",
      type: "text",
      name: "LName",
      id: "LName",
      className: "editProfileFormInput",
    },
    {
      label: "کد ملی",
      type: "text",
      name: "NationalCode",
      id: "NationalCode",
      className: "editProfileFormInput",
    },
    {
      label: "ایمیل",
      type: "text",
      name: "email",
      id: "email",
      className: "editProfileFormInput",
    },
    {
      label: "تاریخ تولد",
      name: "BirthDay",
      id: "BirthDay",
      className: "editProfileFormInput",
      isDate: true,
    },
    {
      label: "شماره موبایل",
      type: "text",
      name: "phoneNumber",
      id: "phoneNumber",
      className: "editProfileFormInput",
    },
    {
      label: "محل سکونت",
      type: "text",
      name: "HomeAdderess",
      id: "HomeAdderess",
      className: "editProfileFormInput",
    },
    {
      label: "لینک پروفایل لینکدین",
      type: "text",
      name: "LinkdinProfile",
      id: "LinkdinProfile",
      className: "editProfileFormInput",
    },
    {
      label: "لینک تلگرام",
      type: "text",
      name: "TelegramLink",
      id: "TelegramLink",
      className: "editProfileFormInput",
    },
    {
      label: "جنسیت",
      name: "Gender",
      id: "Gender",
      isCheckbox: false,
      wrapperClassName:
        "editProfileGenderAndReceiveMessageEventSelectBoxWrapper mt-0",
      className: "editProfileGenderAndReceiveMessageEventSelectBox",
      as: "select",
      isGender: true,
      options: [
        {
          value: true,
          label: "آقا",
        },
        {
          value: false,
          label: "خانم",
        },
      ],
    },
    {
      label: "دریافت کردن پیام رویداد",
      as: "select",
      name: "ReceiveMessageEvent",
      id: "ReceiveMessageEvent",
      wrapperClassName:
        "editProfileGenderAndReceiveMessageEventSelectBoxWrapper",
      className: "editProfileGenderAndReceiveMessageEventSelectBox",
      isCheckbox: false,
      options: [
        {
          value: true,
          label: "فعال",
        },
        {
          value: false,
          label: "غیرفعال",
        },
      ],
    },
    {
      label: "توضیحات کاربر",
      name: "userAbout",
      id: "userAbout",
      className: "editProfileFormInput",
      as: "textarea",
    },
  ] as const;

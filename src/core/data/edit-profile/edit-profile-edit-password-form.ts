export const EDIT_PROFILE_EDIT_PASSWORD_FORM = [
  {
    type: "password",
    label: "رمز عبور فعلی",
    name: "nowPassword",
    id: "nowPassword",
    className: "editProfileEditPasswordField",
    isPassword: true,
    passwordPlaceholder: "رمز عبور فعلی",
  },
  {
    type: "password",
    label: "رمز عبور جدید",
    name: "newPassword",
    id: "newPassword",
    className: "editProfileEditPasswordField",
    isPassword: true,
    passwordPlaceholder: "رمز عبور جدید",
  },
  {
    type: "password",
    label: "تکرار رمز عبور",
    name: "repeatPassword",
    id: "repeatPassword",
    className: "editProfileEditPasswordField",
    isPassword: true,
    passwordPlaceholder: "رمز عبور فعلی",
  },
] as const;

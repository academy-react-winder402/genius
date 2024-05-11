import http from "../../interceptor";

export const editPassword = async (
  oldPassword: string,
  newPassword: string,
  repeatPassword: string
) => {
  try {
    const response = await http.post("/SharePanel/ChangePassword", {
      oldPassword,
      newPassword,
      repeatPassword,
    });

    return response;
  } catch (error) {
    return false;
  }
};

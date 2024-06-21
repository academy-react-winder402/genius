import http from "../../interceptor";

export const editPasswordAPI = async (
  oldPassword: string,
  newPassword: string
) => {
  try {
    const response = await http.post("/SharePanel/ChangePassword", {
      oldPassword,
      newPassword,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

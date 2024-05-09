import http from "../../../interceptor";

export const resetPasswordAPI = async (
  userId: number,
  newPassword: string,
  resetValue: string
) => {
  try {
    const response = http.post("/Sign/Reset", {
      userId,
      newPassword,
      resetValue,
    });

    return response;
  } catch (error) {
    return false;
  }
};

import http from "../../interceptor";

export const registerAPI = async (
  password: string,
  gmail: string,
  phoneNumber: string
) => {
  try {
    const response = await http.post("/Sign/Register", {
      password,
      gmail,
      phoneNumber,
    });

    return response;
  } catch (error) {
    return false;
  }
};

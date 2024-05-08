import http from "../../interceptor";

export const sendVerificationMessageAPI = async (phoneNumber: string) => {
  try {
    const response = await http.post("/Sign/SendVerifyMessage", {
      phoneNumber,
    });

    return response;
  } catch (error) {
    return false;
  }
};

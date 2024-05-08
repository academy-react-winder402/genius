import http from "../../interceptor";

export const verifyMessageAPI = async (phoneNumber: string, verifyCode: string) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", { phoneNumber, verifyCode });

    return response;
  } catch (error) {
    return false;
  }
};

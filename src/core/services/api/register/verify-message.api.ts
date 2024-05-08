import http from "../../interceptor";

interface veryMessageAPIProps {
  userData: { phoneNumber: string; verifyCode: string };
}

export const veryMessageAPI = async (userData: veryMessageAPIProps) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", userData);

    return response;
  } catch (error) {
    return false;
  }
};

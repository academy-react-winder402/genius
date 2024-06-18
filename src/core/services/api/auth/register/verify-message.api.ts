import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const verifyMessageAPI = async (
  phoneNumber: string,
  verifyCode: string
) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/VerifyMessage", {
      phoneNumber,
      verifyCode,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

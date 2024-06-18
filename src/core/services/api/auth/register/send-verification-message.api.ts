import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const sendVerificationMessageAPI = async (phoneNumber: string) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/SendVerifyMessage", {
      phoneNumber,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

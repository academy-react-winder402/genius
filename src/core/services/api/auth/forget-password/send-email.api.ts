import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const sendEmailAPI = async (email: string, baseUrl: string) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/ForgetPassword", {
      email,
      baseUrl,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

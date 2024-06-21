import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const registerAPI = async (
  password: string,
  gmail: string,
  phoneNumber: string
) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/Register", {
      password,
      gmail,
      phoneNumber,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

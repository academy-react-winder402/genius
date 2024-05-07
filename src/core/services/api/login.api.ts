import { AxiosResponse } from "axios";

import { LoginFormInterface } from "../../../types/login/login-form";

import http from "../interceptor";

export const loginAPI = async (user: LoginFormInterface) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/Login", user);

    return response;
  } catch (error) {
    return false;
  }
};

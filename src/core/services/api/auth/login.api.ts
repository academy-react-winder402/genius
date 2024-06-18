import { AxiosResponse } from "axios";

import { UserDataInterface } from "../../../../types/login/user-data";

import http from "../../interceptor";

export const loginAPI = async (user: UserDataInterface) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/Login", user);

    return response.data;
  } catch (error) {
    return false;
  }
};

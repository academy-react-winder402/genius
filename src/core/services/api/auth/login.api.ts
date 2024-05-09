import { UserDataInterface } from "../../../../types/login/user-data";

import http from "../../interceptor";

export const loginAPI = async (user: UserDataInterface) => {
  try {
    const response = await http.post("/Sign/Login", user);

    return response;
  } catch (error) {
    return false;
  }
};

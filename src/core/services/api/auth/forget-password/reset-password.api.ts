import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const resetPasswordAPI = async (
  userId: number,
  newPassword: string,
  resetValue: string
) => {
  try {
    const response: AxiosResponse = await http.post("/Sign/Reset", {
      userId,
      newPassword,
      resetValue,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

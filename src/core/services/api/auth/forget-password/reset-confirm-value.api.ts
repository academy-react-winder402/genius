import { AxiosResponse } from "axios";

import http from "../../../interceptor";

export const resetConfirmValueAPI = async (configValue: string) => {
  try {
    const response: AxiosResponse = await http.get(
      `/Sign/Reset/${configValue}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

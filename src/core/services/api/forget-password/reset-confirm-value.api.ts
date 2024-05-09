import http from "../../interceptor";

export const resetConfirmValueAPI = async (configValue: string) => {
  try {
    const response = http.get(`/Sign/Reset/${configValue}`);

    return response;
  } catch (error) {
    return false;
  }
};

import http from "../../interceptor";

export const resetConfirmValueAPI = async (configValue: string) => {
  try {
    const response = http.get("/Sign/Reset/:ConfigValue", {
      params: {
        configValue,
      },
    });

    return false;
  } catch (error) {
    return false;
  }
};

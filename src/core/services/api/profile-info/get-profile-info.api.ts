import http from "../../interceptor";

export const getProfileInfoAPI = async () => {
  try {
    const response = http.get("/SharePanel/GetProfileInfo");

    return response;
  } catch (error) {
    return false;
  }
};

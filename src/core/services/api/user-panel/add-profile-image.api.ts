import http from "../../interceptor";

export const addProfileImageAPI = async (images: FormData) => {
  try {
    const response = http.post("/SharePanel/AddProfileImage", images);

    return response;
  } catch (error) {
    return false;
  }
};

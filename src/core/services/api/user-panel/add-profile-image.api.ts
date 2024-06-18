import http from "../../interceptor";

export const addProfileImageAPI = async (images: FormData) => {
  try {
    const response = await http.post("/SharePanel/AddProfileImage", images);

    return response.data;
  } catch (error) {
    return false;
  }
};

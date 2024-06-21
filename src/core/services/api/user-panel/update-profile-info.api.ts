import http from "../../interceptor";

export const updateProfileInfoAPI = async (user: FormData) => {
  try {
    const response = await http.put("/SharePanel/UpdateProfileInfo", user);

    return response.data;
  } catch (error) {
    return false;
  }
};

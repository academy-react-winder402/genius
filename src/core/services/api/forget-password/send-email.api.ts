import http from "../../interceptor";

export const sendEmailAPI = async (email: string, baseUrl: string) => {
  try {
    const response = await http.post("/Sign/ForgetPassword", {
      email,
      baseUrl,
    });

    return response;
  } catch (error) {
    return false;
  }
};

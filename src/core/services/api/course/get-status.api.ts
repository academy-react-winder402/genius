import http from "../../interceptor";

export const getStatusAPI = async () => {
  try {
    const response = await http.get("/Status");

    return response.data;
  } catch (error) {
    return false;
  }
};

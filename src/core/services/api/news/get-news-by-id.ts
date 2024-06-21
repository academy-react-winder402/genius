import http from "../../interceptor";

import { BlogInterface } from "../../../../types/blog";

export const getNewsByIdAPI = async (id: string) => {
  try {
    const response = await http.get<BlogInterface>(`/News/${id}`);

    return response.data;
  } catch (error) {
    return false;
  }
};

import http from "../../interceptor";

import { NewsInterface } from "../../../../types/news";

export const getNewsByIdAPI = async (id: string) => {
  try {
    const response = await http.get<NewsInterface>(`/News/${id}`);

    return response;
  } catch (error) {
    return false;
  }
};

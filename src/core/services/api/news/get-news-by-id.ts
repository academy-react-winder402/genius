import http from "../../interceptor";

import { NewsInterface } from "../../../../types/news";

export const getCourseByIdAPI = async (Id: string) => {
  try {
    const response = await http.get<NewsInterface>("/News/:Id", {
      params: {
        Id,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

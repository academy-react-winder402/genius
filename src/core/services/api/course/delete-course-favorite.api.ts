import { AxiosResponse } from "axios";

import http from "../../interceptor";

export const deleteCourseFavoriteAPI = async (courseFavoriteId: string) => {
  try {
    const response: AxiosResponse = await http.delete(
      "/Course/DeleteCourseFavorite",
      {
        data: {
          courseFavoriteId,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

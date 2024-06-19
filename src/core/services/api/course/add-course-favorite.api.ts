import { AxiosResponse } from "axios";

import http from "../../interceptor";

export const addCourseFavoriteAPI = async (courseId: string) => {
  try {
    const response: AxiosResponse = await http.post(
      "/Course/AddCourseFavorite",
      { courseId }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

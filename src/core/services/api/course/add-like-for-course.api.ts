import { AxiosResponse } from "axios";

import http from "../../interceptor";

export const addLikeForCourseAPI = async (courseId: string) => {
  try {
    const response: AxiosResponse = await http.post(
      `/Course/AddCourseLike?courseId=${courseId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

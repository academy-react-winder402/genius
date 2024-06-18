import { AxiosResponse } from "axios";

import http from "../../interceptor";

export const addDislikeForCourseAPI = async (courseId: string) => {
  try {
    const response: AxiosResponse = await http.post(
      `/Course/AddCourseDissLike?courseId=${courseId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

import http from "../../../interceptor";

import { CommentInterface } from "../../../../../types/comment";

export const getCourseCommentsAPI = async (courseId: string) => {
  try {
    const response = await http.get<CommentInterface[]>(
      `/Course/GetCourseCommnets/${courseId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

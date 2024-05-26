import http from "../../../interceptor";

export const addCourseCommentLikeAPI = async (courseCommentId: string) => {
  try {
    const response = http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${courseCommentId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

import http from "../../../interceptor";

export const addCourseCommentLikeAPI = async (courseCommentId: string) => {
  try {
    const response = await http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${courseCommentId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

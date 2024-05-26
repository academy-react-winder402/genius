import http from "../../../interceptor";

export const getCourseReplyCommentsAPI = async (
  courseId: string,
  commentId: string
) => {
  try {
    const response = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

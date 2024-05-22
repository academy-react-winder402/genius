import http from "../../../interceptor";

export const addCommentCourseAPI = async (comment: FormData) => {
  try {
    const response = await http.post("/Course/AddCommentCourse", comment);

    return response;
  } catch (error) {
    return false;
  }
};

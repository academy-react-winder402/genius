import http from "../../interceptor";

export const addLikeForCourseAPI = async (courseId: string) => {
  try {
    const response = await http.post(
      `/Course/AddCourseLike?courseId=${courseId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

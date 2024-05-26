import http from "../../interceptor";

export const addDislikeForCourseAPI = async (courseId: string) => {
  try {
    const response = await http.post(
      `/Course/AddCourseDissLike?courseId=${courseId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

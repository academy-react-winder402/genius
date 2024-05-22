import http from "../../../interceptor";

export const getCourseComments = async (courseId: string) => {
  try {
    const response = http.get(`/Course/GetCourseCommnets/${courseId}`);

    return response;
  } catch (error) {
    return false;
  }
};

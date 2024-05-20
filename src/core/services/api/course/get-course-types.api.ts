import http from "../../interceptor";

export const getCourseTypes = async () => {
  try {
    const response = await http.get("/CourseType/GetCourseTypes");

    return response;
  } catch (error) {
    return false;
  }
};

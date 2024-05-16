import http from "../../interceptor";

import { CourseInterface } from "../../../../types/courses";

export const getCourseByIdAPI = async (courseId: string) => {
  try {
    const response = await http.get<CourseInterface>("/Home/GetCourseDetails", {
      params: {
        courseId,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

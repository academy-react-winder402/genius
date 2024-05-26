import http from "../../interceptor";

import { CourseDetailsInterface } from "../../../../types/course-details";

export const getCourseByIdAPI = async (courseId: string) => {
  try {
    const response = await http.get<CourseDetailsInterface>("/Home/GetCourseDetails", {
      params: {
        courseId,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

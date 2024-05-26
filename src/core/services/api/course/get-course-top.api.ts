import http from "../../interceptor";

import { CourseInterface } from "../../../../types/courses";

export const getCourseTopAPI = async (count: number) => {
  try {
    const response = await http.get<CourseInterface[]>("/Home/GetCoursesTop", {
      params: {
        count,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

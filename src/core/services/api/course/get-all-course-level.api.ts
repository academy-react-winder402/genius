import http from "../../interceptor";

import { CourseLevelsInterface } from "../../../../types/course-levels";

export const getAllCourseLevelAPI = async () => {
  try {
    const response = await http.get<CourseLevelsInterface[]>(
      "/CourseLevel/GetAllCourseLevel"
    );

    return response;
  } catch (error) {
    return false;
  }
};

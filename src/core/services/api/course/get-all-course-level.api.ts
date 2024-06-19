import { AxiosResponse } from "axios";

import http from "../../interceptor";

import { CourseLevelsInterface } from "../../../../types/course-levels";

export const getAllCourseLevelAPI = async () => {
  try {
    const response: AxiosResponse = await http.get<CourseLevelsInterface[]>(
      "/CourseLevel/GetAllCourseLevel"
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

import http from "../../interceptor";

import { CourseTypesInterface } from "../../../../types/course-types";

export const getCourseTypesAPI = async () => {
  try {
    const response = await http.get<CourseTypesInterface[]>(
      "/CourseType/GetCourseTypes"
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

import { AxiosResponse } from "axios";

import http from "../../interceptor";

import { CourseDetailsInterface } from "../../../../types/course-details";

export const getCourseByIdAPI = async (courseId: string) => {
  try {
    const response: AxiosResponse = await http.get<CourseDetailsInterface>(
      "/Home/GetCourseDetails",
      {
        params: {
          courseId,
        },
      }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

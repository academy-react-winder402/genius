import { AxiosResponse } from "axios";

import http from "../../interceptor";

import { CourseInterface } from "../../../../types/courses";

export const getCourseTopAPI = async (count: number) => {
  try {
    const response: AxiosResponse = await http.get<CourseInterface[]>(
      "/Home/GetCoursesTop",
      {
        params: {
          count,
        },
      }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

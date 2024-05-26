import http from "../../interceptor";

import { TeacherDetailsInterface } from "./../../../../types/teacher-details";

export const getTeacherDetailsAPI = async (teacherId: number) => {
  try {
    const response = await http.get<TeacherDetailsInterface>(
      "/Home/GetTeacherDetails",
      {
        params: {
          teacherId,
        },
      }
    );

    return response;
  } catch (error) {
    return false;
  }
};

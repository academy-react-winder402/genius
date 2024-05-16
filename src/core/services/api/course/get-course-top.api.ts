import http from "../../interceptor";

export const getCourseTopAPI = async (count: number) => {
  try {
    const response = await http.get("/Home/GetCoursesTop", {
      params: {
        count,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

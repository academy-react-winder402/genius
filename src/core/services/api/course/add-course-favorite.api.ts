import http from "../../interceptor";

export const addCourseFavoriteAPI = async (courseId: string) => {
  try {
    const response = http.post("/Course/AddCourseFavorite", { courseId });

    return response;
  } catch (error) {
    return false;
  }
};

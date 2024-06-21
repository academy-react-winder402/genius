import http from "../../../interceptor";

export const addCommentCourseAPI = async (comment: FormData) => {
  try {
    const response = await http.post("/Course/AddCommentCourse", comment, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

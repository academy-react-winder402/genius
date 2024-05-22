import http from "../../../interceptor";

export const updateCourseCommentAPI = async (comment: FormData) => {
  try {
    const response = await http.put("/Course/UpdateCourseComment", comment, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

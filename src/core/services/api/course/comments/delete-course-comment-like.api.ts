import http from "../../../interceptor";

export const deleteCourseCommentLikeAPI = async (courseCommandId: string) => {
  try {
    const response = await http.delete("/Course/DeleteCourseCommentLike", {
      params: {
        courseCommandId,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

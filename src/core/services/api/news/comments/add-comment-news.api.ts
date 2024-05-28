import http from "../../../interceptor";

export const addCommentNewsAPI = async (comment: FormData) => {
  try {
    const response = await http.post("/News/CreateNewsComment", comment, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

import http from "../../../interceptor";

export const deleteNewsCommentLikeAPI = async (newsCommandId: string) => {
  try {
    const response = await http.delete("/News/DeleteCommentLikeNews", {
      params: {
        newsCommandId,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

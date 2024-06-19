import http from "../../../interceptor";

export const addNewsCommentLikeAPI = async (CommentId: string) => {
  try {
    const response = await http.post(
      `/News/CommentLike/:CommentId?LikeType=true${CommentId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

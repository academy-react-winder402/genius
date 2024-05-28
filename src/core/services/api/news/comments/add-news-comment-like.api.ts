import http from "../../../interceptor";

export const addNewsCommentLikeAPI = async (CommentId: string) => {
  try {
    const response = http.post(
      `/News/CommentLike/:CommentId?LikeType=true${CommentId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

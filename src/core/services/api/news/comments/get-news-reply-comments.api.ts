import http from "../../../interceptor";

export const getNewsReplyCommentsAPI = async (
  Id: string,
  commentId: string
) => {
  try {
    const response = await http.get(
      `/News/GetRepliesComments?Id=<uuid>${Id}/${commentId}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

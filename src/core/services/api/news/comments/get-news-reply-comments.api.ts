import http from "../../../interceptor";

export const getNewsReplyCommentsAPI = async (
  Id: string,
  commentId: string
) => {
  try {
    const response = await http.get(
      `/News/GetRepliesComments?Id=${Id}/${commentId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

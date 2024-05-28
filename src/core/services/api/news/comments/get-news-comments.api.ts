import http from "../../../interceptor";

import { CommentInterface } from "../../../../../types/comment";

export const getNewsCommentsAPI = async (Id: string) => {
  try {
    const response = await http.get<CommentInterface[]>(
      `/News/GetNewsComments?NewsId=<uuid>${Id}`
    );

    return response;
  } catch (error) {
    return false;
  }
};

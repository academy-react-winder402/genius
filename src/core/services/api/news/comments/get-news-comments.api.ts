import http from "../../../interceptor";

import { CommentInterface } from "../../../../../types/comment";

export const getNewsCommentsAPI = async (newsId: string) => {
  try {
    const response = await http.get<CommentInterface[]>(
      `/News/GetNewsComments`,
      {
        params: {
          newsId,
        },
      }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

import { useQuery } from "@tanstack/react-query";

import http from "../../../core/services/interceptor";

import { NewsComment } from "../../../types/news-comment";

const useNewsReplyComments = (id: string) => {
  return useQuery({
    queryKey: ["newsReplyComments", id],
    queryFn: async () =>
      await http
        .get<NewsComment[]>(`/News/GetRepliesComments`, {
          params: {
            id,
          },
        })
        .then((res) => res.data),
  });
};

export { useNewsReplyComments };

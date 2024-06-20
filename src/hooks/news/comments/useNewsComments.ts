import { useQuery } from "@tanstack/react-query";

import http from "../../../core/services/interceptor";

const useNewsComments = (newsId: string) => {
  return useQuery({
    queryKey: ["newsComments", newsId],
    queryFn: async () =>
      await http
        .get("/News/GetNewsComments", {
          params: {
            newsId,
          },
        })
        .then((res) => res.data),
  });
};

export { useNewsComments };

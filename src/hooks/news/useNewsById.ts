import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { BlogInterface } from "../../types/blog";

interface NewsInterface {
  detailsNewsDto: BlogInterface;
}

const useNewsById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["newsDetails", id],
    queryFn: async () =>
      await http.get<NewsInterface>(`/News/${id}`).then((res) => res.data),
  });
};

export { useNewsById };

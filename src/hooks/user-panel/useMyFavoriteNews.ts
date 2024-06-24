import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

const useMyFavoriteNews = () => {
  return useQuery({
    queryKey: ["myFavoriteNews"],
    queryFn: async () =>
      await http.get("/SharePanel/GetMyFavoriteNews").then((res) => res.data),
  });
};

export { useMyFavoriteNews };

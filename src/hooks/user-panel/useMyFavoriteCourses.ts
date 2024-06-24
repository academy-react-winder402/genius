import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

const useMyFavoriteCourses = () => {
  return useQuery({
    queryKey: ["myFavoriteCourses"],
    queryFn: async () =>
      await http
        .get("/SharePanel/GetMyFavoriteCourses")
        .then((res) => res.data),
  });
};

export { useMyFavoriteCourses };

import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

const useMyReserveCourses = () => {
  return useQuery({
    queryKey: ["myReserveCourses"],
    queryFn: async () =>
      await http.get("/SharePanel/GetMyCoursesReserve").then((res) => res.data),
  });
};

export { useMyReserveCourses };

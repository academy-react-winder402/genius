import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

const useTeacherDetails = (teacherId: number) => {
  return useQuery({
    queryKey: ["teacherDetails", teacherId],
    queryFn: async () =>
      await http
        .get("/Home/GetTeacherDetails", {
          params: {
            teacherId,
          },
        })
        .then((res) => res.data),
  });
};

export { useTeacherDetails };

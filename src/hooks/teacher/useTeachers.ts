import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { TeacherItemsInterface } from "../../types/teacher-items";

const useTeachers = () => {
  return useQuery<TeacherItemsInterface[], Error>({
    queryKey: ["teachers"],
    queryFn: async () =>
      await http.get("/Home/GetTeachers").then((res) => res.data),
  });
};

export { useTeachers };

import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { CourseInterface } from "../../types/course";

const useCourseTop = (count: number) => {
  return useQuery({
    queryKey: ["course-top", count],
    queryFn: async () =>
      await http
        .get<CourseInterface[]>("/Home/GetCoursesTop", {
          params: {
            count,
          },
        })
        .then((res) => res.data),
  });
};

export { useCourseTop };

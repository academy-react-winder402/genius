import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { CourseDetailsInterface } from "../../types/course-details";

const useCourseDetails = (courseId: string) => {
  return useQuery({
    queryKey: ["courseDetails", courseId],
    queryFn: async () =>
      await http
        .get<CourseDetailsInterface>("/Home/GetCourseDetails", {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
  });
};

export { useCourseDetails };

import { useQuery } from "@tanstack/react-query";

import http from "../../../core/services/interceptor";

import { CourseComment } from "../../../types/course-comment";

const useCourseComments = (courseId: string) => {
  return useQuery({
    queryKey: ["courseComments", courseId],
    queryFn: async () =>
      await http
        .get<CourseComment[]>(`/Course/GetCourseCommnets/${courseId}`)
        .then((res) => res.data),
  });
};

export { useCourseComments };


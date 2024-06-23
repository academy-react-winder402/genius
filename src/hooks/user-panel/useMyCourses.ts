import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { MyCourses } from "../../types/user-panel/my-courses";

const useMyCourses = (
  pageNumber?: number,
  rowsOfPage?: number,
  sortingCol?: string,
  sortType?: string,
  query?: string
) => {
  return useQuery({
    queryKey: ["myCourses"],
    queryFn: async () =>
      await http
        .get<MyCourses>("/SharePanel/GetMyCourses", {
          params: {
            pageNumber,
            rowsOfPage,
            sortingCol,
            sortType,
            query,
          },
        })
        .then((res) => res.data),
  });
};

export { useMyCourses };

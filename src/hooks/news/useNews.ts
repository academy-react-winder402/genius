import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { NewsInterface } from "../../types/news";

interface News {
  news: NewsInterface[];
  totalCount: number;
}

const useNews = (
  pageNumber: number,
  rowsOfPage: number | undefined,
  sortingCol: string | undefined,
  sortType: string | undefined,
  query: string | undefined,
  newsCategoryId: number | undefined
) => {
  return useQuery<News, Error>({
    queryKey: [
      "news",
      pageNumber,
      rowsOfPage,
      sortingCol,
      sortType,
      query,
      newsCategoryId,
    ],
    queryFn: async () =>
      await http
        .get<News>("/News", {
          params: {
            pageNumber: pageNumber + 1,
            rowsOfPage: rowsOfPage ? rowsOfPage : 9,
            sortingCol: sortingCol ? sortingCol : undefined,
            sortType: sortType ? sortType : undefined,
            query: query ? query : undefined,
            newsCategoryId: newsCategoryId ? newsCategoryId : undefined,
          },
        })
        .then((res) => res.data),
  });
};

export { useNews };

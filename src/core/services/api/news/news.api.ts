import http from "../../interceptor";

import { NewsInterface } from "../../../../types/news";

export const newsAPI = async (
  pageNumber: number | null = 1,
  rowsOfPage: number | null = 10,
  sortingCol: string | null = "insertDate",
  sortType: string | null = "DESC",
  query: string | null = "",
  newsCategoryId: number | null
) => {
  try {
    const response = await http.get<NewsInterface[]>("/News", {
      params: {
        pageNumber,
        rowsOfPage,
        sortingCol,
        sortType,
        query,
        newsCategoryId,
      },
    });

    return response;
  } catch (error) {
    return false;
  }
};

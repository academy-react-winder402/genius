import http from "../../interceptor";

export const newsAPI = async (
  pageNumber: number = 1,
  rowsOfPage: number = 10,
  sortingCol: string = "insertDate",
  sortType: string = "DESC",
  query: string = "",
  newsCategoryId: number
) => {
  try {
    const response = await http.get("/News", {
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

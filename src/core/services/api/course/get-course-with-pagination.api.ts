import { AxiosResponse } from "axios";
import http from "../../interceptor";

export const getCourseWithPaginationAPI = async (
  pageNumber: number | undefined,
  rowsOfPage: number | undefined,
  sortingCol: string | undefined,
  sortType: string | undefined,
  query: string | undefined,
  costDown: number | undefined,
  costUp: number | undefined,
  techCount: number | undefined,
  listTech: string | undefined,
  courseLevelId: number | undefined,
  courseTypeId: number | undefined,
  startDate: string | undefined,
  endDate: string | undefined,
  teacherId: number | undefined
) => {
  try {
    const response: AxiosResponse = await http.get(
      "/Home/GetCoursesWithPagination",
      {
        params: {
          pageNumber,
          rowsOfPage,
          sortingCol,
          sortType,
          query,
          costDown,
          costUp,
          techCount,
          listTech,
          courseLevelId,
          courseTypeId,
          startDate,
          endDate,
          teacherId,
        },
      }
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

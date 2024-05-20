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
  listTech: { value: string }[] | undefined,
  courseLevelId: number | undefined,
  courseTypeId: number | undefined,
  startDate: Date | undefined,
  endDate: Date | undefined,
  teacherId: number | undefined
) => {
  try {
    const response = http.get("/Home/GetCoursesWithPagination", {
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
    });

    return response;
  } catch (error) {
    return false;
  }
};

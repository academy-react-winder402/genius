import { Dispatch, SetStateAction } from "react";

import { MyCoursesList } from "./my-courses-list";

export interface DashboardCourses {
  courses: MyCoursesList[];
  totalCount: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  rowsOfPage: number;
}

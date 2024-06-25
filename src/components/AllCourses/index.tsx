import { useState } from "react";
import { toast } from "react-toastify";

import useCourses from "../../hooks/course/useCourses";

import { DashboardAllCourses } from "../common/DashboardCourses/DashboardAllCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";

const AllCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsOfPage, setRowsOfPage] = useState(8);
  const [query, setQuery] = useState<string>();

  const { data, error, isLoading } = useCourses(
    currentPage,
    rowsOfPage,
    undefined,
    undefined,
    query ? query : undefined
  );

  if (error) toast.error("مشکلی در دریافت دوره ها به وجود آمد !");

  return (
    <div>
      <DashboardTitleBox>همه دوره ها</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox
        setCurrentPage={setCurrentPage}
        setCoursesPerPage={setRowsOfPage}
        setQuery={setQuery}
      />
      <DashboardAllCourses
        courses={data?.courseFilterDtos || []}
        rowsOfPage={rowsOfPage}
        setCurrentPage={setCurrentPage}
        totalCount={data?.totalCount || 0}
        isLoading={isLoading}
      />
    </div>
  );
};

export { AllCourses };

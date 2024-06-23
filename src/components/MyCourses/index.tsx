import { useState } from "react";
import { toast } from "react-toastify";

import { useMyCourses } from "../../hooks/user-panel/useMyCourses";

import { DashboardCourses } from "../common/DashboardCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";

const MyCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsOfPage, setRowsOfPage] = useState(8);
  const [query, setQuery] = useState<string>();

  const { data, error, isLoading } = useMyCourses(
    currentPage,
    rowsOfPage,
    undefined,
    undefined,
    query ? query : undefined
  );

  if (error) toast.error("مشکلی در دریافت دوره ها به وجود آمد !");

  return (
    <div>
      <DashboardTitleBox>دوره های من</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox
        setCurrentPage={setCurrentPage}
        setCoursesPerPage={setRowsOfPage}
        setQuery={setQuery}
      />
      <DashboardCourses
        courses={data?.listOfMyCourses!}
        totalCount={data?.totalCount!}
        rowsOfPage={rowsOfPage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />
    </div>
  );
};

export { MyCourses };

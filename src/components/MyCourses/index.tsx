import { useState } from "react";

import { DashboardCourses } from "../common/DashboardCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { useMyCourses } from "../../hooks/user-panel/useMyCourses";

const MyCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsOfPage, setRowsOfPage] = useState(8);
  const [query, setQuery] = useState<string>();

  const { data } = useMyCourses(
    currentPage,
    rowsOfPage,
    undefined,
    undefined,
    query ? query : undefined
  );

  return (
    <div>
      <DashboardTitleBox>دوره های من</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox
        query={query}
        setCoursesPerPage={setRowsOfPage}
        setQuery={setQuery}
      />
      <DashboardCourses
        courses={data?.listOfMyCourses!}
        totalCount={data?.totalCount!}
        rowsOfPage={rowsOfPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { MyCourses };

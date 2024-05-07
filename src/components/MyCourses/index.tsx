import { useState } from "react";

import { DashboardCourses } from "../common/DashboardCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";

const MyCourses = () => {
  const [coursesPerPage, setCoursesPerPage] = useState<number>(8);

  return (
    <div>
      <DashboardTitleBox>دوره های من</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox setCoursesPerPage={setCoursesPerPage} />
      <DashboardCourses coursesPerPage={coursesPerPage} />
    </div>
  );
};

export { MyCourses };

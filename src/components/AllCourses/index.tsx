import { useState } from "react";

import { DashboardCourses } from "../common/DashboardCourses";
import { DashboardCoursesSearchFilterBox } from "../common/DashboardCoursesSearchFilterBox";
import { DashboardTitleBox } from "../common/DashboardTitleBox";

const AllCourses = () => {
  const [coursesPerPage, setCoursesPerPage] = useState<number>(8);

  return (
    <div>
      <DashboardTitleBox>همه دوره ها</DashboardTitleBox>
      <DashboardCoursesSearchFilterBox setCoursesPerPage={setCoursesPerPage} />
      <DashboardCourses coursesPerPage={coursesPerPage} />
    </div>
  );
};

export { AllCourses };

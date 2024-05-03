import { useState } from "react";

import { DashboardTitleBox } from "../common/DashboardTitleBox";
import { MyCoursesSearchFilterBox } from "./MyCoursesSearchFilterBox";
import { MyCoursesSection } from "./MyCoursesSection";

const MyCourses = () => {
  const [coursesPerPage, setCoursesPerPage] = useState<number>(8);

  return (
    <div>
      <DashboardTitleBox>دوره های من</DashboardTitleBox>
      <MyCoursesSearchFilterBox setCoursesPerPage={setCoursesPerPage} />
      <MyCoursesSection coursesPerPage={coursesPerPage} />
    </div>
  );
};

export { MyCourses };

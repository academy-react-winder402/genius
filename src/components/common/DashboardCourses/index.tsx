import { DashboardCourses as DashboardCoursesInterface } from "../../../types/user-panel/dashboard-courses";

import { PaginatedDashboardCourses } from "./PaginatedDashboardCourses";

const DashboardCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
}: DashboardCoursesInterface) => {
  return (
    <div className="dashboardCoursesSectionWrapper">
      <div className="dashboardCoursesInformationBox">
        <span>تصویر</span>
        <span className="w-[95px]">نام دوره</span>
        <span>مدرس</span>
        <span>تاریخ شروع</span>
        <span>قیمت</span>
        <span>مدیریت</span>
      </div>
      <div>
        <PaginatedDashboardCourses
          courses={courses}
          totalCount={totalCount}
          rowsOfPage={rowsOfPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export { DashboardCourses };

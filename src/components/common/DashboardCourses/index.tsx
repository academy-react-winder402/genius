import { courseItems } from "../../../core/data/courses/courseItems";

import { PaginatedDashboardCourses } from "./PaginatedDashboardCourses";

interface DashboardCoursesProps {
  coursesPerPage: number;
}

const DashboardCourses = ({ coursesPerPage }: DashboardCoursesProps) => {
  return (
    <div className="dashboardCoursesSectionWrapper">
      <div className="dashboardCoursesInformationBox">
        <span className="lg:w-[130px]">تصویر</span>
        <span className="lg:w-[235px]">نام دوره</span>
        <span className="lg:w-[145px]">مدرس</span>
        <span className="lg:w-[124px]">تاریخ شروع</span>
        <span className="lg:w-[163px]">قیمت</span>
        <span>مدیریت</span>
      </div>
      <div>
        <PaginatedDashboardCourses
          courses={courseItems}
          itemsPerPage={coursesPerPage}
        />
      </div>
    </div>
  );
};

export { DashboardCourses };


import { courseItems } from "../Courses/CourseItems/courseItems";

import { PaginatedMyCourses } from "./MyCoursesSection/PaginatedMyCourses";

interface MyCoursesSectionProps {
  coursesPerPage: number;
}

const MyCoursesSection = ({ coursesPerPage }: MyCoursesSectionProps) => {
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
        <PaginatedMyCourses
          courses={courseItems}
          itemsPerPage={coursesPerPage}
        />
      </div>
    </div>
  );
};

export { MyCoursesSection };

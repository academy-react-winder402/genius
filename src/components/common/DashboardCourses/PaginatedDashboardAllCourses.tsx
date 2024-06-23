import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { CourseInterface } from "../../../types/course";
import { DashboardCourses } from "../../../types/user-panel/dashboard-courses";

import { Pagination } from "../Pagination";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardMobileCourseItem } from "./DashboardMobileCourseItem";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const PaginatedDashboardAllCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
}: DashboardCourses<CourseInterface>) => {
  const pageCount = Math.ceil(totalCount / rowsOfPage!);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {courses && courses.length === 0 && (
          <span className="text-center font-[500] text-text1 dark:text-darkText">
            دوره ای پیدا نشد !
          </span>
        )}
        {courses &&
          courses.map((course) => {
            const formattedPrice = priceWithCommas(+course.cost);

            return (
              <div key={course.courseId}>
                <DashboardCourseItem
                  courseId={course.courseId}
                  tumbImageAddress={course.tumbImageAddress || blankThumbnail}
                  courseTitle={course.title}
                  lastUpdate={course.lastUpdate}
                  teacherName={course.teacherName}
                  formattedPrice={formattedPrice}
                />
                <DashboardMobileCourseItem
                  key={course.courseId}
                  image={course.tumbImageAddress || blankThumbnail}
                  id={course.courseId}
                  title={course.title}
                  teacherName={course.teacherName}
                  formattedPrice={formattedPrice}
                />
              </div>
            );
          })}
      </div>
      {pageCount > 1 && (
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      )}
    </div>
  );
};

export { PaginatedDashboardAllCourses };

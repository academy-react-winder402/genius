import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { DashboardCourses } from "../../../types/user-panel/dashboard-courses";

import { Pagination } from "../Pagination";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardMobileCourseItem } from "./DashboardMobileCourseItem";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const PaginatedDashboardCourses = ({
  courses,
  totalCount,
  rowsOfPage,
  setCurrentPage,
}: DashboardCourses) => {
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {courses &&
          courses.map((course) => {
            const formattedPrice = priceWithCommas(+course.cost);

            return (
              <div key={course.courseId}>
                <DashboardCourseItem
                  course={course}
                  formattedPrice={formattedPrice}
                />
                <DashboardMobileCourseItem
                  key={course.courseId}
                  image={course.tumbImageAddress || blankThumbnail}
                  id={course.courseId}
                  title={course.courseTitle}
                  teacherName={course.fullName}
                  formattedPrice={formattedPrice}
                />
              </div>
            );
          })}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={totalCount} />
    </div>
  );
};

export { PaginatedDashboardCourses };

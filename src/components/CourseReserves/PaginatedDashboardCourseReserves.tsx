import { useState } from "react";

import { useCourseDetails } from "../../hooks/course/useCourseDetails";

import { CourseReserves } from "../../types/user-panel/course-reserves";

import { DashboardMobileCourseItem } from "../common/DashboardCourses/DashboardMobileCourseItem";
import { Pagination } from "../common/Pagination";
import { DashboardCourseReserveItem } from "./DashboardCourseReserveItem";

interface PaginatedDashboardCourseReservesProps {
  courseReserves: CourseReserves[];
  rowsOfPage: number;
}

const PaginatedDashboardCourseReserves = ({
  courseReserves,
  rowsOfPage,
}: PaginatedDashboardCourseReservesProps) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + rowsOfPage;
  const currentItems = courseReserves.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(courseReserves.length / rowsOfPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * rowsOfPage) % courseReserves.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {currentItems && currentItems.length === 0 && (
          <span className="text-center font-[500] text-text1 dark:text-darkText">
            دوره ای پیدا نشد !
          </span>
        )}
        {currentItems &&
          currentItems.map((courseReserve) => {
            const { data: course } = useCourseDetails(courseReserve.courseId);

            return (
              <div key={courseReserve.courseId}>
                <DashboardCourseReserveItem
                  courseReserve={courseReserve}
                  imageAddress={course?.imageAddress}
                />
                <DashboardMobileCourseItem
                  id={courseReserve.courseId}
                  image={course?.imageAddress!}
                  teacherName={course?.teacherName!}
                  title={course?.title!}
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

export { PaginatedDashboardCourseReserves };

import { useState } from "react";

import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { CourseItemsInterface } from "../../../types/course-items";

import { Pagination } from "../Pagination";
import { DashboardCourseItem } from "./DashboardCourseItem";
import { DashboardMobileCourseItem } from "./DashboardMobileCourseItem";

interface PaginatedDashboardCoursesProps {
  courses: CourseItemsInterface[];
  itemsPerPage: number;
}

const PaginatedDashboardCourses = ({
  courses,
  itemsPerPage,
}: PaginatedDashboardCoursesProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems: CourseItemsInterface[] = courses.slice(
    itemOffset,
    endOffset
  ) as CourseItemsInterface[];
  const pageCount: number = Math.ceil(courses.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {currentItems &&
          currentItems.map((course) => {
            const formattedPrice = priceWithCommas(course.price);

            return (
              <>
                <DashboardCourseItem
                  key={course.image}
                  course={course}
                  formattedPrice={formattedPrice}
                />
                <DashboardMobileCourseItem
                  key={course.id}
                  image={course.image}
                  id={course.id}
                  title={course.title}
                  teacherName={course.teacherName}
                  formattedPrice={formattedPrice}
                />
              </>
            );
          })}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedDashboardCourses };

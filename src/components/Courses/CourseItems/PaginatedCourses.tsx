import { useState } from "react";

import { CourseItemsInterface } from "../../../types/course-items";

import { Pagination } from "../../common/Pagination";
import { CourseItem } from "../../common/CourseItem";
import { CourseItemStyleTwo } from "../../common/CourseItemStyleTwo";

interface PaginatedCoursesProps {
  courses: CourseItemsInterface[];
  itemsPerPage: number;
  coursesStyle: number;
}

const PaginatedCourses = ({
  courses,
  itemsPerPage,
  coursesStyle,
}: PaginatedCoursesProps) => {
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 lg:mt-3">
        {currentItems &&
          currentItems.map((course) =>
            coursesStyle === 1 ? (
              <CourseItem key={course.id} course={course} />
            ) : (
              <CourseItemStyleTwo key={course.id} course={course} />
            )
          )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedCourses };

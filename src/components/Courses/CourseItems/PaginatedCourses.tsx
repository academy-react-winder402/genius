import { Dispatch, SetStateAction } from "react";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemStyleTwo } from "../../common/CourseItemStyleTwo";
import { Pagination } from "../../common/Pagination";

interface PaginatedCoursesProps {
  courses: CourseInterface[];
  totalCount: number;
  itemsPerPage: number;
  coursesStyle: number;
  itemOffset: number;
  setItemOffset: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedCourses = ({
  courses,
  totalCount,
  itemsPerPage,
  coursesStyle,
  itemOffset,
  setItemOffset,
  setCurrentPage,
}: PaginatedCoursesProps) => {
  const pageCount: number = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 lg:mt-3">
        {courses &&
          courses.map((course) =>
            coursesStyle === 1 ? (
              <CourseItem key={course.courseId} course={course} />
            ) : (
              <CourseItemStyleTwo key={course.courseId} course={course} />
            )
          )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedCourses };

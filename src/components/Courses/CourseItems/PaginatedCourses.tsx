import { Dispatch, SetStateAction } from "react";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemStyleTwo } from "../../common/CourseItemStyleTwo";
import { Pagination } from "../../common/Pagination";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";
import { CourseItemSkeletonStyleTwo } from "../../common/CourseItemSkeletonStyleTwo";

interface PaginatedCoursesProps {
  courses: CourseInterface[];
  totalCount: number;
  itemsPerPage: number;
  coursesStyle: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedCourses = ({
  courses,
  totalCount,
  itemsPerPage,
  coursesStyle,
  setCurrentPage,
}: PaginatedCoursesProps) => {
  const pageCount: number = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % totalCount;
    setCurrentPage(event.selected);
  };
  return (
    <div className="paginatedCoursesWrapper">
      <div className="paginatedCourses">
        {courses ? (
          courses.map((course) =>
            coursesStyle === 1 ? (
              <CourseItem key={course.courseId} course={course} />
            ) : (
              <CourseItemStyleTwo key={course.courseId} course={course} />
            )
          )
        ) : coursesStyle === 1 ? (
          <>
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
          </>
        ) : (
          <div className="courseItemSkeletonStyleTwoWrapper">
            <CourseItemSkeletonStyleTwo />
            <CourseItemSkeletonStyleTwo />
            <CourseItemSkeletonStyleTwo />
            <CourseItemSkeletonStyleTwo />
            <CourseItemSkeletonStyleTwo />
            <CourseItemSkeletonStyleTwo />
          </div>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedCourses };

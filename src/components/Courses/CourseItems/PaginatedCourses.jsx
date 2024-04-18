import { useState } from "react";
import PropTypes from "prop-types";

import { Pagination } from "../../common/Pagination";
import { CourseItem } from "../../common/CourseItem";

const PaginatedCourses = ({ courses, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = courses.slice(itemOffset, endOffset);
  console.log(currentItems, "test");
  const pageCount = Math.ceil(courses.length, itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 lg:mt-3">
        {currentItems &&
          currentItems.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

PaginatedCourses.propTypes = {
  courses: PropTypes.array,
  itemsPerPage: PropTypes.number,
};

export { PaginatedCourses };

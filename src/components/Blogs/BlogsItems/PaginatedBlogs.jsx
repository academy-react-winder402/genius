import { useState } from "react";
import PropTypes from "prop-types";

import { Pagination } from "../../common/Pagination";
import { BlogItem } from "../../common/BlogsItem";
import { CourseItemStyleTwo } from "../../common/CourseItemStyleTwo";

const PaginatedBlogs = ({ courses, itemsPerPage, coursesStyle }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = courses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(courses.length, itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 lg:mt-3 w-auto">
        {currentItems &&
          currentItems.map((blog) =>
            coursesStyle === 1 ? (
              <BlogItem key={blog.id} blog={blog} />
            ) : (
              <CourseItemStyleTwo key={blog.id} blog={blog} />
            )
          )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

PaginatedBlogs.propTypes = {
  courses: PropTypes.array,
  itemsPerPage: PropTypes.number,
  coursesStyle: PropTypes.any,
};

export { PaginatedBlogs };

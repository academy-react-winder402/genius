import { Dispatch, SetStateAction, useState } from "react";

import { BlogItemInterface } from "../../../types/blog-item";

import { Pagination } from "../../common/Pagination";
import { BlogItem } from "./BlogItem";

interface PaginatedBlogsProps {
  blogs: BlogItemInterface[];
  itemsPerPage: number;
  totalCount: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedBlogs = ({
  blogs,
  totalCount,
  itemsPerPage,
  setCurrentPage,
}: PaginatedBlogsProps) => {
  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected);
  };
  return (
    <div className="formFieldWrapperAndPaginatedWrapper">
      <div
        className={`flex flex-wrap ${
          totalCount < 5 ? "justify-start" : "justify-center"
        } items-center gap-x-6 gap-y-10 lg:mt-3`}
      >
        {blogs && blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedBlogs };

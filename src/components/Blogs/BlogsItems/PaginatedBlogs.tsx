import { useState } from "react";

import { BlogItemInterface } from "../../../types/blog-items";

import { Pagination } from "../../common/Pagination";
import { BlogItem } from "./BlogItem";

interface PaginatedBlogsProps {
  blogs: BlogItemInterface[];
  itemsPerPage: number;
}

const PaginatedBlogs = ({ blogs, itemsPerPage }: PaginatedBlogsProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems : BlogItemInterface[] = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col gap-4 mt-5">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-10 lg:mt-3">
        {currentItems &&
          currentItems.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedBlogs };

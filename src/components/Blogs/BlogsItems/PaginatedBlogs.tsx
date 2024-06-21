import { Dispatch, SetStateAction } from "react";

import { BlogInterface } from "../../../types/blog";

import { Pagination } from "../../common/Pagination";
import { BlogItem } from "./BlogItem";
import { BlogItemSkeletonStyleTwo } from "./BlogItemSkeletonStyleTwo";

interface PaginatedBlogsProps {
  blogs: BlogInterface[];
  totalCount: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginatedBlogs = ({
  blogs,
  totalCount,
  itemsPerPage,
  setCurrentPage,
}: PaginatedBlogsProps) => {
  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="formFieldWrapperAndPaginatedWrapper">
      <div
        className={`flex flex-wrap gap-x-6 gap-y-10 lg:mt-3 mr-2 ${
          totalCount < 5 ? "justify-start" : "justify-center"
        }`}
      >
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
        ) : (
          <div className="blogsSkeletonWrapper">
            <div className="landingBlogItemsSkeleton">
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
            </div>
            <div className="landingBlogItemsSkeletonHidden">
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
            </div>
            <div className="landingBlogItemsSkeletonHidden">
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
              <BlogItemSkeletonStyleTwo />
            </div>
          </div>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export { PaginatedBlogs };

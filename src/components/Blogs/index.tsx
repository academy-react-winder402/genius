import { useEffect, useState } from "react";

import { newsAPI } from "../../core/services/api/news/news.api";

import { BlogItemInterface } from "../../types/blog-item";

import { BlogsHeroSection } from "./BlogsHeroSection";
import { PaginatedBlogs } from "./BlogsItems/PaginatedBlogs";
import { BlogsTopSection } from "./BlogsTopSection";
import { toast } from "../common/toast";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogItemInterface[]>();
  const [totalCount, setTotalCount] = useState<number>();
  const [query, setQuery] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [sortType, setSortType] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const getBlogs = await newsAPI(
          1,
          9,
          undefined,
          undefined,
          undefined,
          undefined
        );

        setBlogs(getBlogs.news);
        setTotalCount(getBlogs.totalCount);
      } catch (error) {
        toast.error("مشکلی در دریافت مقالات به وجود آمد !");
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const getBlogs = await newsAPI(
          1,
          9,
          sort ? sort : undefined,
          sortType,
          query ? query : undefined,
          undefined
        );

        setBlogs(getBlogs.news);
        setTotalCount(getBlogs.totalCount);
      } catch (error) {
        toast.error("مشکلی در دریافت مقالات به وجود آمد !");
      }
    };

    fetchBlogs();
  }, [query, currentPage, sort, sortType]);

  return (
    <div className="w-[95%] mx-auto">
      <BlogsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 mt-32 !p-0">
        <div className="mx-auto">
          <BlogsTopSection
            setQuery={setQuery}
            setSort={setSort}
            setSortType={setSortType}
            sort={sort}
          />
          <PaginatedBlogs
            blogs={blogs!}
            itemsPerPage={9}
            setCurrentPage={setCurrentPage}
            totalCount={totalCount!}
          />
        </div>
      </div>
    </div>
  );
};

export { Blogs };

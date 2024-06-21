import { useState } from "react";
import { toast } from "react-toastify";

import { useNews } from "../../hooks/news/useNews";

import { BlogsHeroSection } from "./BlogsHeroSection";
import { PaginatedBlogs } from "./BlogsItems/PaginatedBlogs";
import { BlogsTopSection } from "./BlogsTopSection";

const Blogs = () => {
  const [query, setQuery] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [sortType, setSortType] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(0);

  const { data, error } = useNews(
    currentPage,
    9,
    sort || undefined,
    sortType,
    query || undefined,
    undefined
  );

  if (error) toast.error("مشکلی در دریافت اخبار به وجود آمد !");

  return (
    <div className="w-[95%] mx-auto">
      <BlogsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 mt-32 !p-0">
        <div className="mx-auto">
          <BlogsTopSection
            sort={sort}
            setQuery={setQuery}
            setSort={setSort}
            setSortType={setSortType}
            setCurrentPage={setCurrentPage}
          />
          <PaginatedBlogs
            blogs={data?.news || []}
            totalCount={data?.totalCount || 0}
            itemsPerPage={9}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { Blogs };

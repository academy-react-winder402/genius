import { blogItems } from "./BlogsItems/blogItems";

import { BlogsHeroSection } from "./BlogsHeroSection";
import { PaginatedBlogs } from "./BlogsItems/PaginatedBlogs";
import { BlogsTopSection } from "./BlogsTopSection";

const Blogs = () => {
  return (
    <div className="w-[95%] mx-auto">
      <BlogsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 mt-32 px-5 lg:px-0">
        <div className="mx-auto">
          <BlogsTopSection />
          <PaginatedBlogs blogs={blogItems} itemsPerPage={9} />
        </div>
      </div>
    </div>
  );
};

export { Blogs };

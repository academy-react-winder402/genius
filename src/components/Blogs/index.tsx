import { useState } from "react";

import { blogItems } from "./BlogsItems/blogItems";

import { BlogsHeroSection } from "./BlogsHeroSection";
import { PaginatedBlogs } from "./BlogsItems/PaginatedBlogs";
import { BlogsTopSection } from "./BlogsTopSection";

const Blogs = () => {
  const [coursesStyle, setCoursesStyle] = useState(1);

  return (
    <>
      <BlogsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="lg:w-[957px]">
          <BlogsTopSection />
          <PaginatedBlogs
            courses={blogItems}
            itemsPerPage={9}
            coursesStyle={coursesStyle}
          />
        </div>
      </div>
    </>
  );
};

export { Blogs };

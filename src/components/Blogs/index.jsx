import { BlogsHeroSection } from "./BlogsHeroSection";

import { useState } from "react";

// import { courseItems } from "../Courses/CourseItems/courseItems";
import { blogsItems } from "../Blogs/BlogsItems/blogsItems.js";
import { PaginatedBlogs } from "../Blogs/BlogsItems/PaginatedBlogs.jsx";
import { BlogsTopSection } from "./BlogsTopSection";

const Blogs = () => {
  const [coursesStyle, setCoursesStyle] = useState(1);

  return (
    <>
      <BlogsHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="lg:w-[957px]">
          <BlogsTopSection
            coursesStyle={coursesStyle}
            setCoursesStyle={setCoursesStyle}
          />
          <PaginatedBlogs
            courses={blogsItems}
            itemsPerPage={9}
            coursesStyle={coursesStyle}
          />
        </div>
      </div>
    </>
  );
};

export { Blogs };

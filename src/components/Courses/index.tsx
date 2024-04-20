import { useState } from "react";

import { courseItems } from "./CourseItems/courseItems";
import { PaginatedCourses } from "./CourseItems/PaginatedCourses";
import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesHeroSection } from "./CoursesHeroSection";
import { CoursesTopSection } from "./CoursesTopSection";

const Courses = () => {
  const [coursesStyle, setCoursesStyle] = useState<number>(1);

  return (
    <>
      <CoursesHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="lg:w-[296px] h-[98%] rounded-[24px] shadow-primaryShadow py-4 bg-white hidden lg:block">
          <div className="px-2">
            <FilterTitleTrash />
          </div>
          <div className="mt-4">
            <Filters />
          </div>
        </div>
        <div className="lg:w-[957px]">
          <CoursesTopSection
            coursesStyle={coursesStyle}
            setCoursesStyle={setCoursesStyle}
          />
          <PaginatedCourses
            courses={courseItems}
            itemsPerPage={9}
            coursesStyle={coursesStyle}
          />
        </div>
      </div>
    </>
  );
};

export { Courses };

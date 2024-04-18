import { courseItems } from "./CourseItems/courseItems";
import { PaginatedCourses } from "./CourseItems/PaginatedCourses";
import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesHeroSection } from "./CoursesHeroSection";

const Courses = () => {
  return (
    <>
      <CoursesHeroSection />
      <div className="flex flex-col lg:flex-row justify-center gap-x-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="lg:w-[296px] h-[98%] rounded-[24px] shadow-primaryShadow py-4 bg-white mt-10">
          <div className="px-2">
            <FilterTitleTrash />
          </div>
          <div className="mt-4">
            <Filters />
          </div>
        </div>
        <div className="lg:w-[79%]">
          <PaginatedCourses courses={courseItems} itemsPerPage={9} />
        </div>
      </div>
    </>
  );
};

export { Courses };

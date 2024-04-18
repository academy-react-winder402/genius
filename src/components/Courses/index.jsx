import { CourseItemsMapped } from "./CourseItems/CourseItemsMapped";
import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesHeroSection } from "./CoursesHeroSection";

const Courses = () => {
  return (
    <>
      <CoursesHeroSection />
      <div className="flex justify-center gap-5 w-[90%] mx-auto mt-32 px-5 lg:px-0">
        <div className="w-[296px] rounded-[24px] shadow-primaryShadow py-4 bg-white mt-10">
          <div className="px-2">
            <FilterTitleTrash />
          </div>
          <div className="mt-4">
            <Filters />
          </div>
        </div>
        <div className="w-[79%] flex gap-x-3 flex-wrap">
          <CourseItemsMapped />
        </div>
      </div>
    </>
  );
};

export { Courses };

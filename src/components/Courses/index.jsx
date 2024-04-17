import { Filters } from "./CoursesFilter/Filters";
import { FilterTitleTrash } from "./CoursesFilter/FilterTitleTrash";
import { CoursesHeroSection } from "./CoursesHeroSection";

const Courses = () => {
  return (
    <>
      <CoursesHeroSection />
      <div className="flex gap-5 w-[1050px] mx-auto mt-32 px-5 lg:px-0">
        <div className="w-[296px] rounded-[24px] shadow-primaryShadow py-4 bg-white">
          <div className="px-2">
            <FilterTitleTrash />
          </div>
          <div className="mt-4">
            <Filters />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export { Courses };

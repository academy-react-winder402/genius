import { CourseItem } from "../../common/CourseItem";
import { landingCourseItems } from "./landingCourseItems";

const LandingCoursesMapped = () => {
  return (
    <>
      <div className="flex flex-wrap gap-[18px] justify-center items-center mx-auto">
        {landingCourseItems.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-primary text-white w-[131px] h-[48px] rounded-full">
          مشاهده همه
        </button>
      </div>
    </>
  );
};

export { LandingCoursesMapped };

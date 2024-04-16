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
    </>
  );
};

export { LandingCoursesMapped };

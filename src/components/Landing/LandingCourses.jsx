import { Heading } from "../common/Heading";
import { MainButton } from "../common/MainButton";
import { LandingCoursesMapped } from "./Courses/LandingCoursesMapped";

const LandingCourses = () => {
  return (
    <div className="mt-14">
      <Heading title="دوره‌های اموزشی" />
      <LandingCoursesMapped />
      <div className="flex justify-center mt-8">
        <MainButton text="مشاهده همه" href="/courses" />
      </div>
    </div>
  );
};

export { LandingCourses };

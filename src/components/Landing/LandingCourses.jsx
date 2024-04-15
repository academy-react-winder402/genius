import { Heading } from "../common/Heading";
import { LandingCoursesMapped } from "./Courses/LandingCoursesMapped";

const LandingCourses = () => {
  return (
    <div className="mt-14">
      <Heading title="دوره‌های اموزشی" />
      <LandingCoursesMapped />
    </div>
  );
};

export { LandingCourses };

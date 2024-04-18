import { Fragment } from "react";
import { CoursesHeroSection } from "../Courses/coursesHeroSection";
import { CourseItem } from "../common/CourseItem";

const Courses = (course) => {
  return (
    <Fragment>
      <CoursesHeroSection />
      <CourseItem key={course.id} course={course} />
    </Fragment>
  );
};

export { Courses };

import { Up } from "./coursesHeroSection";
import { CourseItem } from "../common/CourseItem/index";
import { Fragment } from "react";

const Courses = (course) => {
  return (
    <Fragment>
      <Up />
      <CourseItem key={course.id} course={course} />
    </Fragment>
  );
};

export { Courses };

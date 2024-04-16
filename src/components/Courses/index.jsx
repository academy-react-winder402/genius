import { Up } from "./coursesHeroSection";
import { CourseItem } from "../common/CourseItem/index";

const Courses = (course) => {
  return (<Up />), (<CourseItem key={course.id} course={course} />);
};

export { Courses };

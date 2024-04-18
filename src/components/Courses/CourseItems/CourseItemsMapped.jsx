import { CourseItem } from "../../common/CourseItem";
import { courseItems } from "./courseItems";

const CourseItemsMapped = () => {
  return courseItems.map((course) => (
    <CourseItem key={course.id} course={course} />
  ));
};

export { CourseItemsMapped };

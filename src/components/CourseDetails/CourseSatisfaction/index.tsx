import { CourseLikeDislike } from "./CourseLikeDislike";
import { CourseRating } from "./CourseRating";

const CourseSatisfaction = () => {
  return (
    <div className="courseDetailsSatisfaction">
      <CourseRating />
      <CourseLikeDislike />
    </div>
  );
};

export { CourseSatisfaction };

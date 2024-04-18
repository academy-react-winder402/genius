import { CourseLikeDislike } from "./CourseLikeDislike";
import { CourseRating } from "./CourseRating";

const CourseSatisfaction = () => {
  return (
    <div className="mt-5 flex justify-between items-center">
      <CourseRating />
      <CourseLikeDislike />
    </div>
  );
};

export { CourseSatisfaction };

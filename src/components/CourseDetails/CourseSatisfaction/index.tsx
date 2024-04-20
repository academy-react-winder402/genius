import { CourseLikeDislike } from "./CourseLikeDislike";
import { CourseRating } from "./CourseRating";

const CourseSatisfaction = () => {
  return (
    <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
      <CourseRating />
      <CourseLikeDislike />
    </div>
  );
};

export { CourseSatisfaction };

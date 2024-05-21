import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { CourseInterface } from "../../../types/courses";

import { CourseLikeBox } from "../CourseLikeBox";
import { Link } from "../Link";
import { CourseItemDetails } from "./CourseItemDetails";

interface CourseItemStyleTwoProps {
  course: CourseInterface;
}

const CourseItemStyleTwo = ({ course }: CourseItemStyleTwoProps) => {
  const formattedPrice = priceWithCommas(+course.cost);

  return (
    <div className="w-full">
      <div className="courseItemStyleTwo">
        <div className="lg:w-[264px] lg:h-[180px] relative">
          <Link to={`/courses/${course.courseId}`}>
            <img
              src={course.tumbImageAddress}
              className="rounded-[20px] lg:h-[180px]"
            />
          </Link>
          <CourseLikeBox
            classes="absolute top-4 right-3"
            likeCount={course.likeCount}
          />
        </div>
        <div className="lg:w-[75%]">
          <div>
            <h3 className="font-[700] text-text1 dark:text-darkText">
              <Link to={`/courses/${course.courseId}`}>{course.title}</Link>
            </h3>
            <p className="courseItemStyleTwoDescription">{course.describe}</p>
          </div>
          <div className="courseItemStyleTwoDetailsWrapperFlexBox">
            <CourseItemDetails course={course} />
            <div className="font-[700] text-[20px] text-primaryColor">
              {formattedPrice}{" "}
              <span className="font-[500] text-[14px] text-text1 dark:text-darkText">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItemStyleTwo };

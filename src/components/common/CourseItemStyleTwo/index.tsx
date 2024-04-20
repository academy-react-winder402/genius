import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { CourseLikeBox } from "../CourseLikeBox";
import { Link } from "../Link";
import { CourseItemDetails } from "./CourseItemDetails";

interface CourseItemStyleTwoProps {
  course: object;
}

const CourseItemStyleTwo = ({ course }: CourseItemStyleTwoProps) => {
  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="w-full">
      <div className="courseItemStyleTwo">
        <div className="lg:w-[264px] lg:h-[180px] relative">
          <Link to={`/courses/${course.id}`}>
            <img src={course.image} className="rounded-[20px] lg:h-[180px]" />
          </Link>
          <CourseLikeBox classes="absolute top-4 right-3" />
        </div>
        <div className="lg:w-[75%]">
          <h3 className="font-[700] text-text1">
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </h3>
          <p className="courseItemStyleTwoDescription">{course.description}</p>
          <div className="courseItemStyleTwoDetailsWrapperFlexBox">
            <CourseItemDetails course={course} />
            <div className="font-[700] text-[20px] text-primaryColor">
              {formattedPrice}{" "}
              <span className="font-[500] text-[14px] text-text1">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseItemStyleTwo };

import PropTypes from "prop-types";
import { priceWithCommas } from "../../../core/utils/number-helper.utils";
import { CourseLikeBox } from "../CourseLikeBox";

import teacherIcon from "../../../assets/images/Courses/Icons/teacher.svg";
import studentsIcon from "../../../assets/images/Courses/Icons/profile-user.svg";
import lessonsIcon from "../../../assets/images/Courses/Icons/note.svg";
import clockIcon from "../../../assets/images/Courses/Icons/clock.svg";
import calenderIcon from "../../../assets/images/Courses/Icons/calendar.svg";
import { CourseItemDetail } from "./CourseItemDetail";

const CourseItemStyleTwo = ({ course }) => {
  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="w-full">
      <div className="courseItemStyleTwo">
        <div className="lg:w-[264px] lg:h-[180px] relative">
          <img src={course.image} className="rounded-[20px] lg:h-[180px]" />
          <CourseLikeBox classes="absolute top-4 right-3" />
        </div>
        <div className="lg:w-[75%]">
          <h3 className="font-[700] text-text1">{course.title}</h3>
          <p className="courseItemStyleTwoDescription">{course.description}</p>
          <div className="courseItemStyleTwoDetailsWrapperFlexBox">
            <div className="courseItemStyleTwoDetailsWrapper">
              <CourseItemDetail
                imageURL={teacherIcon}
                label={course.teacherName}
              />
              <CourseItemDetail
                imageURL={studentsIcon}
                label={`${course.studentsCount} دانش‌آموز`}
              />
              <CourseItemDetail
                imageURL={lessonsIcon}
                label={`${course.lessonsCount} درس`}
              />
              <CourseItemDetail
                imageURL={clockIcon}
                label={`${course.hour} ساعت`}
              />
              <CourseItemDetail
                imageURL={calenderIcon}
                label={course.createdAt}
              />
            </div>
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

CourseItemStyleTwo.propTypes = {
  course: PropTypes.object,
};

export { CourseItemStyleTwo };

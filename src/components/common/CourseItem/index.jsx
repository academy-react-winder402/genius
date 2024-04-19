import PropTypes from "prop-types";

import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { CourseLikeBox } from "../CourseLikeBox";
import { Link } from "../Link";

import noteIcon from "../../../assets/images/Landing/LandingCourses/note.svg";
import clockIcon from "../../../assets/images/Landing/LandingCourses/clock.svg";
import calenderIcon from "../../../assets/images/Landing/LandingCourses/calendar.svg";

const CourseItem = ({ course }) => {
  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="courseItem w-full lg:w-[296px] mt-0">
      <Link to={`/courses/${course.id}`}>
        <img src={course.image} className="courseItemImage" />
      </Link>
      <h4 className="font-[700] text-text1 mt-4">
        <Link to={`/courses/${course.id}`}>{course.title}</Link>
      </h4>
      <div className="bg-[#ECEFF1] rounded-[24px] flex justify-between items-center mt-5 h-[40px] px-3">
        <div className="courseItemDetailsBox">
          <img src={noteIcon} />
          <span className="courseItemDetailsBoxText">
            {course.lessonsCount} درس
          </span>
        </div>
        <div className="courseItemDetailsBox">
          <img src={clockIcon} />
          <span className="courseItemDetailsBoxText">{course.hour} ساعت</span>
        </div>
        <div className="courseItemDetailsBox">
          <img src={calenderIcon} />
          <span className="courseItemDetailsBoxText">{course.createdAt}</span>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-[14px]">
          <span className="font-[700]">مدرس: </span> {course.teacherName}
        </span>
        <span className="text-[14px]">{course.studentsCount} دانش آموز</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <CourseLikeBox />
        <div className="font-[500] text-[12px] text-text1 flex">
          <span className="text-primaryColor text-[16px] font-[700] ml-2">
            {formattedPrice}
          </span>{" "}
          تومان
        </div>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object,
};

export { CourseItem };

import PropTypes from "prop-types";

import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import noteIcon from "../../../assets/images/Landing/LandingCourses/note.svg";
import clockIcon from "../../../assets/images/Landing/LandingCourses/clock.svg";
import calenderIcon from "../../../assets/images/Landing/LandingCourses/calendar.svg";

const CourseItem = ({ course }) => {
  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="courseItem">
      <img src={course.image} className="courseItemImage" />
      <h4 className="font-[700] text-text1 mt-4">{course.title}</h4>
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
        <div className="flex justify-center items-center bg-[#FFEBEE] cursor-pointer rounded-[24px] w-[51px] h-[32px] font-[500] text-red gap-1 -mt-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-mt-[4px]"
          >
            <path
              d="M8.41337 13.8736C8.18671 13.9536 7.81337 13.9536 7.58671 13.8736C5.65337 13.2136 1.33337 10.4602 1.33337 5.79356C1.33337 3.73356 2.99337 2.06689 5.04004 2.06689C6.25337 2.06689 7.32671 2.65356 8.00004 3.56023C8.67337 2.65356 9.75337 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41337 13.8736Z"
              stroke="#F44336"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          12
        </div>
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

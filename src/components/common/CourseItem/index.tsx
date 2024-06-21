import Tilt from "react-parallax-tilt";

import { priceWithCommas } from "../../../core/utils/number-helper.utils";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { CourseInterface } from "../../../types/courses";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CourseLikeBox } from "../CourseLikeBox";
import { Link } from "../Link";

import noteIcon from "../../../assets/images/Landing/LandingCourses/note.svg";
import clockIcon from "../../../assets/images/Landing/LandingCourses/clock.svg";
import calenderIcon from "../../../assets/images/Landing/LandingCourses/calendar.svg";
import noteDarkIcon from "../../../assets/images/Landing/LandingCourses/note-dark.svg";
import clockDarkIcon from "../../../assets/images/Landing/LandingCourses/clock-dark.svg";
import calenderDarkIcon from "../../../assets/images/Landing/LandingCourses/calendar-dark.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface CourseItemProps {
  course: CourseInterface;
  isUserFavorite: boolean;
}

const CourseItem = ({ course, isUserFavorite }: CourseItemProps) => {
  const darkMode = useDarkModeSelector();
  const formattedPrice = priceWithCommas(+course.cost);
  const formattedDate = convertDateToPersian(course.lastUpdate);

  return (
    <Tilt>
      <div className={`courseItemS2 pt-[2px]`}>
        <Link to={`/courses/${course.courseId}`}>
          <img
            src={
              course.tumbImageAddress == undefined ||
              course.tumbImageAddress === "Not-set" ||
              course.tumbImageAddress === "not-set" ||
              course.tumbImageAddress === "undefined" ||
              course.tumbImageAddress === "<string>" ||
              !course.tumbImageAddress
                ? blankThumbnail
                : course.tumbImageAddress
            }
            className="courseItemImage"
          />
        </Link>
        <h4 className="font-[700] text-text1 dark:text-darkText mt-4">
          <Link to={`/courses/${course.courseId}`}>{course.title}</Link>
        </h4>
        <div className="bg-[#ECEFF1] dark:bg-darkBackground rounded-[24px] flex justify-between items-center mt-5 h-[40px] px-3">
          <div className="courseItemDetailsBox">
            {darkMode === true ? (
              <img src={noteDarkIcon} />
            ) : (
              <img src={noteIcon} />
            )}
            <span className="courseItemDetailsBoxText">
              {course.commandCount} درس
            </span>
          </div>
          <div className="courseItemDetailsBox">
            {darkMode === true ? (
              <img src={clockDarkIcon} />
            ) : (
              <img src={clockIcon} />
            )}
            <span className="courseItemDetailsBoxText">20 ساعت</span>
          </div>
          <div className="courseItemDetailsBox">
            {darkMode === true ? (
              <img src={calenderDarkIcon} />
            ) : (
              <img src={calenderIcon} />
            )}
            <span className="courseItemDetailsBoxText">{formattedDate}</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-[14px]">
            <span className="font-[700]">مدرس: </span> {course.teacherName}
          </span>
          <span className="text-[14px]">0 دانش آموز</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CourseLikeBox
            courseId={course.courseId}
            isUserFavorite={isUserFavorite}
            courseFavoriteCourseId={course.userFavoriteId}
          />
          <div className="font-[500] text-[12px] text-text1 dark:text-darkText flex">
            <span className="text-primaryColor text-[16px] font-[700] ml-2">
              {formattedPrice}
            </span>{" "}
            تومان
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export { CourseItem };

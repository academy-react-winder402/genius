import { useParams } from "react-router-dom";

import { courseItems } from "../../core/data/courses/courseItems";

import { CourseItemsInterface } from "../../types/course-items";

import { priceWithCommas } from "../../core/utils/number-helper.utils";

import { useDarkModeSelector } from "../../redux/darkMode";

import { CourseLikeBox } from "../common/CourseLikeBox";
import { CourseDetailsInformationBox } from "./CourseDetailsInformation/CourseDetailsInformationBox";
import { CourseTeacher } from "./CourseDetailsInformation/CourseTeacher";
import { CourseTabs } from "./CourseTabs";
import { RelatedCourses } from "./RelatedCourses";

import clockDarkIcon from "../../assets/images/CourseDetails/Icons/clock-dark2.svg";
import clockIcon from "../../assets/images/CourseDetails/Icons/clock.svg";
import noteDarkIcon from "../../assets/images/CourseDetails/Icons/note-dark.svg";
import noteIcon from "../../assets/images/CourseDetails/Icons/note.svg";
import calenderTickIcon from "../../assets/images/CourseDetails/Information/calendar-tick.svg";
import calenderIcon from "../../assets/images/CourseDetails/Information/calendar.svg";
import courseStatusIcon from "../../assets/images/CourseDetails/Information/monitor-recorder.svg";
import studentsCountIcon from "../../assets/images/CourseDetails/Information/profile-user.svg";
import { Satisfaction } from "../common/Satisfaction";

const CourseDetails = () => {
  const { courseId } = useParams();

  const course: CourseItemsInterface = courseItems.find(
    (course) => course.id == courseId
  )!;

  const darkMode = useDarkModeSelector();
  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="mt-4">
      <div className="courseDetailsBox">
        <div className="lg:w-[75%]">
          <div className="relative">
            <img src={course.image} className="rounded-[24px]" />
            <CourseLikeBox classes="absolute top-10 right-8 bg-white dark:bg-gray-900" />
            <div className="flex gap-4 absolute bottom-5 left-5">
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? noteDarkIcon : noteIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">
                  {course.lessonsCount!} درس
                </span>
              </div>
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? clockDarkIcon : clockIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">
                  {course.hour!} ساعت
                </span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
              {course.title}
            </h1>
            <p className="font-[500] text-text2 dark:text-darkText mt-2">
              {course.description}
            </p>
          </div>
          <Satisfaction nameData="دوره" />
          <CourseTabs courseLessons={course.courseLessons!} />
        </div>
        <div className="lg:w-[405px]">
          <div className="courseDetailsSidebar">
            <h3 className="courseDetailsSidebarShowInformationText">
              مشخصات دوره
            </h3>
            <div className="courseDetailsInformationItemsWrapper">
              <CourseDetailsInformationBox
                imageURL={studentsCountIcon}
                label="تعداد دانشجو"
                value={String(course.studentsCount)}
              />
              <CourseDetailsInformationBox
                imageURL={courseStatusIcon}
                label="وضعیت دوره"
                value={course.courseStatus!}
              />
              <CourseDetailsInformationBox
                imageURL={calenderIcon}
                label="تاریخ شروع"
                value={course.createdAt}
              />
              <CourseDetailsInformationBox
                imageURL={calenderTickIcon}
                label="تاریخ پایان"
                value={course.courseEndTime!}
              />
            </div>
            <div className="flex justify-between items-center mt-6 w-[90%] mx-auto">
              <button className="bg-primary shadow-courseAddToCarButtonShadow text-white w-[40%] lg:w-[132px] h-[56px] rounded-[80px]">
                شرکت در دوره
              </button>
              <span className="font-[700] text-[24px] text-primaryColor">
                {formattedPrice}{" "}
                <span className="font-[500] text-text1 dark:text-darkText">
                  تومان
                </span>
              </span>
            </div>
          </div>
          <CourseTeacher
            teacherImage={course.teacherImage!}
            teacherName={course.teacherName}
            teacherJob={course.teacherJob!}
          />
        </div>
      </div>
      <RelatedCourses />
    </div>
  );
};

export { CourseDetails };

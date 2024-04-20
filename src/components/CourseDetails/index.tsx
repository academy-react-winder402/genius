import { useParams } from "react-router-dom";

import { CourseItemsInterface } from "../../types/course-items";

import { priceWithCommas } from "../../core/utils/number-helper.utils";

import { CourseLikeBox } from "../common/CourseLikeBox";
import { courseItems } from "../Courses/CourseItems/courseItems";
import { CourseDetailsInformationBox } from "./CourseDetailsInformation/CourseDetailsInformationBox";
import { CourseTeacher } from "./CourseDetailsInformation/CourseTeacher";
import { CourseSatisfaction } from "./CourseSatisfaction";
import { CourseTabs } from "./CourseTabs";

import clockIcon from "../../assets/images/CourseDetails/Icons/clock.svg";
import noteIcon from "../../assets/images/CourseDetails/Icons/note.svg";
import calenderTickIcon from "../../assets/images/CourseDetails/Information/calendar-tick.svg";
import calenderIcon from "../../assets/images/CourseDetails/Information/calendar.svg";
import courseStatusIcon from "../../assets/images/CourseDetails/Information/monitor-recorder.svg";
import studentsCountIcon from "../../assets/images/CourseDetails/Information/profile-user.svg";

const CourseDetails = () => {
  const { id } = useParams();

  const course: CourseItemsInterface = courseItems.find(
    (course) => course.id == id
  )!;

  const formattedPrice = priceWithCommas(course.price);

  return (
    <div className="w-[95%] lg:w-[1100px] mx-auto flex flex-col lg:flex-row gap-5 mt-5">
      <div className="lg:w-[75%]">
        <div className="relative">
          <img src={course.image!} className="rounded-[24px]" />
          <CourseLikeBox classes="absolute top-10 right-8 bg-white" />
          <div className="flex gap-4 absolute bottom-5 left-5">
            <div className="courseDetailImageBox">
              <img src={noteIcon} className="-mt-[3px]" />
              <span className="courseDetailImageBoxTitle">
                {course.lessonsCount!} درس
              </span>
            </div>
            <div className="courseDetailImageBox">
              <img src={clockIcon} className="-mt-[3px]" />
              <span className="courseDetailImageBoxTitle">
                {course.hour!} ساعت
              </span>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-[700] text-[32px] text-text1">{course.title}</h1>
          <p className="font-[500] text-text2 mt-2">{course.description}</p>
        </div>
        <CourseSatisfaction />
        <CourseTabs courseLessons={course.courseLessons} />
      </div>
      <div className="lg:w-[405px]">
        <div className="bg-white shadow-primaryShadow rounded-[24px] py-2 pb-8 px-2">
          <h3 className="font-[700] text-[24px] text-text1 text-center mt-4">
            مشخصات دوره
          </h3>
          <div className="border-t border-courseDetailsInformationBox mt-5 py-0 w-[90%] mx-auto">
            <CourseDetailsInformationBox
              imageURL={studentsCountIcon}
              label="تعداد دانشجو"
              value={String(course.studentsCount)}
            />
            <CourseDetailsInformationBox
              imageURL={courseStatusIcon}
              label="وضعیت دوره"
              value={course.courseStatus}
            />
            <CourseDetailsInformationBox
              imageURL={calenderIcon}
              label="تاریخ شروع"
              value={course.createdAt}
            />
            <CourseDetailsInformationBox
              imageURL={calenderTickIcon}
              label="تاریخ پایان"
              value={course.courseEndTime}
            />
          </div>
          <div className="flex justify-between items-center mt-6 w-[90%] mx-auto">
            <button className="bg-primary shadow-courseAddToCarButtonShadow text-white w-[40%] lg:w-[132px] h-[56px] rounded-[80px]">
              شرکت در دوره
            </button>
            <span className="font-[700] text-[24px] text-primaryColor">
              {formattedPrice}{" "}
              <span className="font-[500] text-text1">تومان</span>
            </span>
          </div>
        </div>
        <CourseTeacher
          teacherImage={course.teacherImage}
          teacherName={course.teacherName}
          teacherJob={course.teacherJob}
        />
      </div>
    </div>
  );
};

export { CourseDetails };

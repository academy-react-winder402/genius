import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { priceWithCommas } from "../../core/utils/number-helper.utils";
import { getCourseByIdAPI } from "../../core/services/api/course/get-course-by-id";
import { getTeacherDetailsAPI } from "../../core/services/api/teacher/get-teachers-details.api";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";
import { courseLessons } from "../../core/data/courses/courseLessons";

import { CourseDetailsInterface } from "../../types/course-details";
import { TeacherDetailsInterface } from "../../types/teacher-details";

import { useDarkModeSelector } from "../../redux/darkMode";

import { CourseDetailsInformationBox } from "./CourseDetailsInformation/CourseDetailsInformationBox";
import { CourseTeacher } from "./CourseDetailsInformation/CourseTeacher";
import { CourseTabs } from "./CourseTabs";
import { RelatedCourses } from "./RelatedCourses";
import { Satisfaction } from "../common/Satisfaction";
import { CourseLikeButton } from "../common/CourseLikeBox/CourseLikeButton";

import clockDarkIcon from "../../assets/images/CourseDetails/Icons/clock-dark2.svg";
import clockIcon from "../../assets/images/CourseDetails/Icons/clock.svg";
import noteDarkIcon from "../../assets/images/CourseDetails/Icons/note-dark.svg";
import noteIcon from "../../assets/images/CourseDetails/Icons/note.svg";
import calenderTickIcon from "../../assets/images/CourseDetails/Information/calendar-tick.svg";
import calenderIcon from "../../assets/images/CourseDetails/Information/calendar.svg";
import courseStatusIcon from "../../assets/images/CourseDetails/Information/monitor-recorder.svg";
import studentsCountIcon from "../../assets/images/CourseDetails/Information/profile-user.svg";
import blackThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

const CourseDetails = () => {
  const [course, setCourse] = useState<CourseDetailsInterface>();
  const [teacher, setTeacher] = useState<TeacherDetailsInterface>();
  const [likeCount, setLikeCount] = useState<number>();
  const [dislikeCount, setDislikeCount] = useState<number>();

  const { courseId } = useParams();

  const darkMode = useDarkModeSelector();
  const formattedPrice = priceWithCommas(+course?.cost!);
  const formattedStartTime = convertDateToPersian(course?.startTime!);
  const formattedEndTime = convertDateToPersian(course?.endTime!);

  const fetchCourse = async () => {
    try {
      const getCourse = await getCourseByIdAPI(courseId!);

      setCourse(getCourse);
      setLikeCount(getCourse!.likeCount);
      setDislikeCount(getCourse!.dissLikeCount);
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await getTeacherDetailsAPI(course?.teacherId!);

        setTeacher(response);
      } catch (error) {
        return false;
      }
    };

    if (course) fetchTeacher();
  }, [course]);

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  console.log(course?.currentUserRateNumber);

  return (
    <div className="mt-4 w-[90%] lg:w-[1100px] mx-auto">
      <div className="courseDetailsBox">
        <div className="lg:w-[75%]">
          <div className="relative">
            <img
              src={course?.imageAddress || blackThumbnail}
              className="rounded-[24px] w-full max-h-[500px] object-cover"
            />
            <CourseLikeButton
              classes="courseLikeBox absolute top-10 right-8 bg-white dark:bg-gray-900"
              courseId={course?.courseId!}
              isCourseFavorite={course?.isUserFavorite!}
              courseFavoriteCourseId={course?.userFavoriteId!}
            />
            <div className="flex gap-4 absolute bottom-5 left-5">
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? noteDarkIcon : noteIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">
                  {course?.commentCount} درس
                </span>
              </div>
              <div className="courseDetailImageBox">
                <img
                  src={darkMode ? clockDarkIcon : clockIcon}
                  className="-mt-[3px]"
                />
                <span className="courseDetailImageBoxTitle">2 ساعت</span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
              {course?.title}
            </h1>
            <p className="font-[500] text-text2 dark:text-darkText mt-2">
              {course?.miniDescribe}
            </p>
          </div>
          <Satisfaction
            nameData="دوره"
            likeCount={likeCount!}
            disLikeCount={dislikeCount!}
            setLikeCount={setLikeCount}
            setDislikeCount={setDislikeCount}
            commentCount={course?.commentCount!}
            courseId={course?.courseId!}
            currentUserRateNumber={course?.currentUserRateNumber!}
          />
          <CourseTabs courseLessons={courseLessons} />
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
                value={String(course?.commentCount)}
              />
              <CourseDetailsInformationBox
                imageURL={courseStatusIcon}
                label="وضعیت دوره"
                value={course?.courseStatusName!}
              />
              <CourseDetailsInformationBox
                imageURL={calenderIcon}
                label="تاریخ شروع"
                value={formattedStartTime}
              />
              <CourseDetailsInformationBox
                imageURL={calenderTickIcon}
                label="تاریخ پایان"
                value={formattedEndTime}
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
            teacherImage={teacher?.pictureAddress!}
            teacherName={teacher?.fullName!}
            teacherJob={teacher?.fullName!}
          />
        </div>
      </div>
      <RelatedCourses />
    </div>
  );
};

export { CourseDetails };

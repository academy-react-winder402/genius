import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { courseLessons } from "../../core/data/courses/courseLessons";
import { setCourseRatingAPI } from "../../core/services/api/course/set-course-rating.api";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";
import { priceWithCommas } from "../../core/utils/number-helper.utils";

import { useCourseReserve } from "../../hooks/course/course-reserve/useCourseReserve";
import { useDeleteCourseReserve } from "../../hooks/course/course-reserve/useDeleteCourseReserve";
import { useCourseDetails } from "../../hooks/course/useCourseDetails";
import { useTeacherDetails } from "../../hooks/teacher/useTeacherDetails";

import { useDarkModeSelector } from "../../redux/darkMode";

import { CourseLikeButton } from "../common/CourseLikeBox/CourseLikeButton";
import { Satisfaction } from "../common/Satisfaction";
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
import blackThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { data: course } = useCourseDetails(courseId!);
  const { data: teacher } = useTeacherDetails(course?.teacherId!);
  const addCourseReserve = useCourseReserve();
  const deleteCourseReserve = useDeleteCourseReserve();
  const darkMode = useDarkModeSelector();

  const formattedPrice = priceWithCommas(+course?.cost!);
  const formattedStartTime = convertDateToPersian(course?.startTime!);
  const formattedEndTime = convertDateToPersian(course?.endTime!);

  const handleRateChange = async (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    try {
      const addRate = await toast.promise(
        setCourseRatingAPI(course?.courseId!, newValue!),
        {
          pending: "در حال افزودن امتیاز ...",
        }
      );

      if (addRate.success) toast.success("امتیاز شما با موفقیت ثبت شد !");
      else toast.error(addRate.message);
    } catch (error) {
      toast.error("مشکلی در افزودن امتیاز به وجود آمد !");
    }
  };

  const handleCourseReserve = () => {
    if (course?.isCourseReseve == "0")
      addCourseReserve.mutate(course?.courseId);
    else deleteCourseReserve.mutate(course?.courseReseveId!);
  };

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
            likeCount={course?.likeCount!}
            disLikeCount={course?.dissLikeCount!}
            courseId={course?.courseId!}
            currentUserRateNumber={course?.currentUserRateNumber!}
            handleRateChange={handleRateChange}
            rateCount={course?.currentUserRateNumber!}
            likeId={course?.userLikeId!}
          />
          <CourseTabs
            courseLessons={courseLessons}
            description={course?.describe!}
            courseId={course?.courseId!}
          />
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
              <button
                className="bg-primary shadow-courseAddToCarButtonShadow text-white w-[40%] lg:w-[132px] h-[56px] rounded-[80px]"
                onClick={handleCourseReserve}
              >
                {course?.isCourseReseve === "0" ? "شرکت در دوره" : "حذف رزرو"}
              </button>
              <span className="font-[700] text-[20px] text-primaryColor mt-1">
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

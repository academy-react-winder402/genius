import { CourseItemsInterface } from "../../../types/course-items";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CourseItemDetailItem } from "./CourseItemDetailItem";

import calenderIcon from "../../../assets/images/Courses/Icons/calendar.svg";
import clockIcon from "../../../assets/images/Courses/Icons/clock.svg";
import lessonsIcon from "../../../assets/images/Courses/Icons/note.svg";
import studentsIcon from "../../../assets/images/Courses/Icons/profile-user.svg";
import teacherIcon from "../../../assets/images/Courses/Icons/teacher.svg";
import calenderDarkIcon from "../../../assets/images/Courses/Icons/calendar-dark.svg";
import clockDarkIcon from "../../../assets/images/Courses/Icons/clock-dark.svg";
import lessonsDarkIcon from "../../../assets/images/Courses/Icons/note-dark.svg";
import studentsDarkIcon from "../../../assets/images/Courses/Icons/profile-user-dark.svg";
import teacherDarkIcon from "../../../assets/images/Courses/Icons/teacher-dark.svg";

interface CourseItemDetailsProps {
  course: CourseItemsInterface;
}

const CourseItemDetails = ({ course }: CourseItemDetailsProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="courseItemStyleTwoDetailsWrapper">
      <CourseItemDetailItem
        imageURL={darkMode === true ? teacherDarkIcon : teacherIcon}
        label={course.teacherName}
      />
      <CourseItemDetailItem
        imageURL={darkMode === true ? studentsDarkIcon : studentsIcon}
        label={`${course.studentsCount} دانش‌آموز`}
      />
      <CourseItemDetailItem
        imageURL={darkMode === true ? lessonsDarkIcon : lessonsIcon}
        label={`${course.lessonsCount} درس`}
      />
      <CourseItemDetailItem
        imageURL={darkMode === true ? clockDarkIcon : clockIcon}
        label={`${course.hour} ساعت`}
      />
      <CourseItemDetailItem
        imageURL={darkMode === true ? calenderDarkIcon : calenderIcon}
        label={course.createdAt}
      />
    </div>
  );
};

export { CourseItemDetails };

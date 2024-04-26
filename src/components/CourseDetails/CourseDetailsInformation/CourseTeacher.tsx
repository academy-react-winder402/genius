import { useDarkModeSelector } from "../../../redux/darkMode";

import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";
import teacherDarkIcon from "../../../assets/images/CourseDetails/Icons/teacher-dark.svg";

interface CourseTeacherProps {
  teacherImage: string;
  teacherName: string;
  teacherJob: string;
}

const CourseTeacher = ({
  teacherImage,
  teacherName,
  teacherJob,
}: CourseTeacherProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="courseDetailsTeacherBox">
      <div>
        <img src={teacherImage} />
      </div>
      <div>
        <div className="flex gap-1">
          <img src={darkMode ? teacherDarkIcon : teacherIcon} />
          <h4 className="font-[700] text-text1 dark:text-darkText">
            {teacherName}
          </h4>
        </div>
        <p className="font-[500] text-[14px] text-text2 dark:text-darkText">
          {teacherJob}
        </p>
      </div>
    </div>
  );
};

export { CourseTeacher };

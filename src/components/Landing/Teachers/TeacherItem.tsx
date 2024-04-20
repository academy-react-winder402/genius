import { TeacherItemsInterface } from "../../../types/teacher-items";

import awardIcon from "../../../assets/images/Landing/LandingTeachers/Icons/award.svg";

const TeacherItem = ({ teacher }: { teacher: TeacherItemsInterface }) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img src={teacher.teacherImage} />
          <div className="landingTeacherItemCoursesCount">
            <img src={awardIcon} className="w-[16px] h-[16px]" />
            <span className="font-[500] text-[14px] text-primaryColor">
              {teacher.teacherCoursesCount} دوره
            </span>
          </div>
        </div>
        <h4 className="-mt-2 font-[700] text-[24px] text-text1">
          {teacher.teacherName}
        </h4>
        <span className="font-[500] text-text2 text-center">
          {teacher.teacherJob}
        </span>
      </div>
    </>
  );
};

export { TeacherItem };

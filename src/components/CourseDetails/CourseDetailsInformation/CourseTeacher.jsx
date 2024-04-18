import PropTypes from "prop-types";

import teacherIcon from "../../../assets/images/CourseDetails/Icons/teacher.svg";

const CourseTeacher = ({ teacherImage, teacherName, teacherJob }) => {
  return (
    <div className="flex gap-3 items-center shadow-primaryShadow px-7 w-full h-[112px] mt-5 bg-white rounded-[24px]">
      <div>
        <img src={teacherImage} />
      </div>
      <div>
        <div className="flex gap-1">
          <img src={teacherIcon} />
          <h4 className="font-[700] text-text1">{teacherName}</h4>
        </div>
        <p className="font-[500] text-[14px] text-text2">{teacherJob}</p>
      </div>
    </div>
  );
};

CourseTeacher.propTypes = {
  teacherImage: PropTypes.string,
  teacherName: PropTypes.string,
  teacherJob: PropTypes.string,
};

export { CourseTeacher };

import PropTypes from "prop-types";

const TeacherItem = ({ teacher }) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <img src={teacher.teacherImage} />
          <span></span>
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

TeacherItem.propTypes = {
  teacher: PropTypes.object,
};

export { TeacherItem };

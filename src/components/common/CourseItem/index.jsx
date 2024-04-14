import PropTypes from "prop-types";

const CourseItem = ({
  image,
  title,
  lessonsCount,
  hour,
  createdAt,
  teacherName,
  studentsCount,
  price,
}) => {
  return <div>CourseItem</div>;
};

CourseItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  lessonsCount: PropTypes.number,
  hour: PropTypes.number,
  createdAt: PropTypes.string,
  teacherName: PropTypes.string,
  studentsCount: PropTypes.number,
  price: PropTypes.any,
};

export { CourseItem };

import PropTypes from "prop-types";

const CourseItemDetailItem = ({ imageURL, label }) => {
  return (
    <div className="flex gap-1">
      <img src={imageURL} />
      <span className="font-[500] text-[14px] text-text1">{label}</span>
    </div>
  );
};

CourseItemDetailItem.propTypes = {
  imageURL: PropTypes.string,
  label: PropTypes.string,
};

export { CourseItemDetailItem };

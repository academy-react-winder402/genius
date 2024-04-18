import PropTypes from "prop-types";

const CourseDetailsInformationBox = ({ imageURL, label, value }) => {
  return (
    <div className="border-b border-b-courseDetailsInformationBox mx-auto py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center">
            <img src={imageURL} />
          </div>
          <span className="font-[500] text-text2">{label}</span>
        </div>
        <span className="font-[700] text-text1">{value}</span>
      </div>
    </div>
  );
};

CourseDetailsInformationBox.propTypes = {
  imageURL: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
};

export { CourseDetailsInformationBox };

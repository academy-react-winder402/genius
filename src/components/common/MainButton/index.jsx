import PropTypes from "prop-types";

const MainButton = ({ text }) => {
  return (
    <button className="bg-primary text-white w-[131px] h-[48px] rounded-full">
      {text}
    </button>
  );
};

MainButton.propTypes = {
  text: PropTypes.any,
};

export { MainButton };

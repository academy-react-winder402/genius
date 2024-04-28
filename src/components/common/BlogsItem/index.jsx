import PropTypes from "prop-types";

import clockIcon from "../../../assets/images/Blogs/eye.svg";
import calenderIcon from "../../../assets/images/Blogs/calendar.svg";

const BlogItem = ({ blog }) => {
  return (
    <div className="courseItem  lg:w-[396px] h-[400px] mt-0">
      <img src={blog.image} className="courseItemImage" />
      <h4 className="font-[700] text-text1 mt-4">{blog.title}</h4>
      <h6 className="font-[50] text-text1 mt-4">{blog.description}</h6>
      <div className="courseItemDetailsBox">
        <img src={clockIcon} className=" relative top-4" />
        <span className="font-[500] text-[12px] text-[#2196F3] relative top-4">
          {blog.hour} بازدید
        </span>
      </div>
      <div className="courseItemDetailsBox">
        <img src={calenderIcon} className=" relative right-20 " />
        <span className="font-[500] text-[12px] text-[#2196F3] relative right-20">
          {blog.createdAt}
        </span>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object,
};

export { BlogItem };

import PropTypes from "prop-types";

import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";
import dotsIcon from "../../../assets/images/Landing/LandingBlogs/Icons/dots.svg";

const LandingBlogItem = ({ blog }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
      <div>
        <img
          src={blog.image}
          className="w-[70%] h-[200px] lg:w-[460px] lg:h-[161px] cursor-pointer"
        />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h3 className="font-[700] text-[20px] text-text1 cursor-pointer mt-1">
            {blog.title}
          </h3>
          <p className="font-[500] lg:text-[14px] text-text2 lg:w-[81%] text-justify">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div className="flex gap-1">
            <img src={eyeIcon} />
            <span className="font-[500] text-[14px] text-primaryColor">
              {blog.allSeas} بازدید
            </span>
          </div>
          <img src={dotsIcon} className="w-[6px] h-[6px]" />
          <div className="flex gap-1">
            <img src={calenderIcon} />
            <span className="font-[500] text-[14px] text-primaryColor">
              {blog.createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingBlogItem.propTypes = {
  blog: PropTypes.object,
};

export { LandingBlogItem };

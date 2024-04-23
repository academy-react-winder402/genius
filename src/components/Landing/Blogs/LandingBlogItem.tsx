import { Link } from "../../common/Link";

import { BlogItemInterface } from "../../../types/blog-items";

import { useDarkModeSelector } from "../../../redux/darkMode";

import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";
import dotsIcon from "../../../assets/images/Landing/LandingBlogs/Icons/dots.svg";
import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import calenderDarkIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar-dark.svg";
import dotsDarkIcon from "../../../assets/images/Landing/LandingBlogs/Icons/dots-dark.svg";
import eyeDarkIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye-dark.svg";

const LandingBlogItem = ({ blog }: { blog: BlogItemInterface }) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
      <div>
        <Link to={`/blogs/${blog.id}`}>
          <img
            src={blog.image}
            className="w-[70%] h-[200px] lg:w-[460px] lg:h-[161px] cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h3 className="font-[700] text-[20px] text-text1 dark:text-darkText cursor-pointer mt-1">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h3>
          <p className="font-[500] lg:text-[14px] text-text2 dark:text-darkText lg:w-[81%] text-justify">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div className="flex gap-1">
            <img src={eyeIcon} />
            <span className="blogItemText">{blog.allSeas} بازدید</span>
          </div>
          <img src={dotsIcon} className="w-[6px] h-[6px]" />
          <div className="flex gap-1">
            <img src={calenderIcon} />
            <span className="blogItemText">{blog.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingBlogItem };

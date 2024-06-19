import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { BlogInterface } from "../../../types/blog";

import { Link } from "../../common/Link";

import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";
import dotsIcon from "../../../assets/images/Landing/LandingBlogs/Icons/dots.svg";
import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const LandingBlogItem = ({ blog }: { blog: BlogInterface }) => {
  const formattedUpdatedAt = convertDateToPersian(blog.updateDate);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 px-4 lg:px-0">
      <div>
        <Link to={`/blogs/${blog.id}`}>
          <img
            src={
              blog.currentImageAddressTumb &&
              blog.currentImageAddressTumb !== "<string>" &&
              blog.currentImageAddressTumb !== "Not-set" &&
              blog.currentImageAddressTumb !== "undefined"
                ? blog.currentImageAddressTumb
                : blankThumbnail
            }
            className="max-w-[224px] w-[224px] h-[161px] rounded-md cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h3 className="font-[700] text-[20px] text-text1 dark:text-darkText cursor-pointer mt-1 lg:w-[300px]">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h3>
          <p className="font-[500] lg:text-[14px] text-text2 dark:text-darkText lg:w-[81%] text-justify">
            {blog.miniDescribe}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div className="flex gap-1">
            <img src={eyeIcon} />
            <span className="blogItemText">{blog.totalCount} بازدید</span>
          </div>
          <img src={dotsIcon} className="w-[6px] h-[6px]" />
          <div className="flex gap-1">
            <img src={calenderIcon} />
            <span className="blogItemText">{formattedUpdatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingBlogItem };

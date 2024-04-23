import { BlogItemInterface } from "../../../types/blog-items";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { Link } from "../../common/Link";

import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";
import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import calenderDarkIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar-dark.svg";
import eyeDarkIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye-dark.svg";

const BlogItemStyleTwo = ({
  id,
  image,
  allSeas,
  createdAt,
  title,
  description,
}: BlogItemInterface) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="flex flex-col gap-4 px-4">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="cursor-pointer" />
      </Link>
      <div className="flex gap-4 mt-4">
        <div className="landingBlogItemStyleTwoBackground">
          <img
            src={darkMode === true ? eyeDarkIcon : eyeIcon}
            className="-mt-[2px]"
          />
          <span className="landingBlogItemsStyleTwoColor">
            {allSeas} بازدید
          </span>
        </div>
        <div className="landingBlogItemStyleTwoBackground">
          <img
            src={darkMode ? calenderDarkIcon : calenderIcon}
            className="-mt-[2px]"
          />
          <span className="landingBlogItemsStyleTwoColor">{createdAt}</span>
        </div>
      </div>
      <h3 className="font-[700] text-[20px] lg:text-[32px] text-text1 dark:text-darkText cursor-pointer">
        <Link to={`/blogs/${id}`}>{title}</Link>
      </h3>
      <p className="font-[500] text-text2 dark:text-darkText text-justify">
        {description}
      </p>
    </div>
  );
};

export { BlogItemStyleTwo };

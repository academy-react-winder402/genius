import { Link } from "../../common/Link";

import calenderIcon from "../../../assets/images/Landing/LandingBlogs/Icons/calendar.svg";
import eyeIcon from "../../../assets/images/Landing/LandingBlogs/Icons/eye.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface BlogItemStyleTwoProps {
  id: string;
  image: string;
  allSeas: number;
  createdAt: string;
  title: string;
  description: string;
}

const BlogItemStyleTwo = ({
  id,
  image,
  allSeas,
  createdAt,
  title,
  description,
}: BlogItemStyleTwoProps) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Link to={`/blogs/${id}`}>
        <img
          src={!image || image === "Not-set" ? blankThumbnail : image}
          className="w-[616px] h-[340px] rounded-md object-cover cursor-pointer"
        />
      </Link>
      <div className="flex gap-4 mt-4">
        <div className="landingBlogItemStyleTwoBackground">
          <img src={eyeIcon} className="-mt-[2px]" />
          <span className="landingBlogItemsStyleTwoColor">
            {allSeas} بازدید
          </span>
        </div>
        <div className="landingBlogItemStyleTwoBackground w-[120px]">
          <img src={calenderIcon} className="-mt-[2px]" />
          <span className="landingBlogItemsStyleTwoColor">{createdAt}</span>
        </div>
      </div>
      <h3 className="font-[700] text-[20px] lg:text-[32px] text-text1 dark:text-darkText cursor-pointer">
        <Link to={`/blogs/${id}`}>{title}</Link>
      </h3>
      <p className="font-[500] text-text2 dark:text-darkText text-justify w-[650px]">
        {description}
      </p>
    </div>
  );
};

export { BlogItemStyleTwo };

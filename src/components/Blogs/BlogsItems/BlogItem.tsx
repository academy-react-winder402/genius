import { BlogItemInterface } from "../../../types/blog-items";
import { Link } from "../../common/Link";

import eyeIcon from "../../../assets/images/blogs/eye.svg";
import dotsIcon from "../../../assets/images/blogs/item-dots.svg";
import calenderIcon from "../../../assets/images/blogs/calendar.svg";

interface BlogItemProps {
  blog: BlogItemInterface;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <div className="w-[400px]">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.image} />
        <h4 className="font-[700] text-[20px] text-text1 mt-5">{blog.title}</h4>
      </Link>
      <p className="w-[405px] font-[500] text-[14px] text-text2 mt-2">
        {blog.description}
      </p>
      <div className="flex gap-3 items-center mt-3">
        <div className="flex gap-1">
          <img src={eyeIcon} />
          <span className="font-[400] text-[14px] text-primaryColor mt-1">
            {blog.allSeas} بازدید
          </span>
        </div>
        <img src={dotsIcon} />
        <div className="flex gap-1">
          <img src={calenderIcon} />
          <span className="font-[400] text-[14px] text-primaryColor mt-1">
            {blog.allSeas} بازدید
          </span>
        </div>
      </div>
    </div>
  );
};

export { BlogItem };

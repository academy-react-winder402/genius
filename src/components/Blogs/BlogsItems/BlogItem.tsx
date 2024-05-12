import { BlogItemInterface } from "../../../types/blog-items";

import { BlogSeasCreatedAt } from "../../common/BlogSeasCreatedAt";
import { Link } from "../../common/Link";

interface BlogItemProps {
  blog: BlogItemInterface;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <div className="lg:w-[400px]">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.image} />
        <h4 className="font-[700] text-[20px] text-text1 dark:text-darkText mt-5">
          {blog.title}
        </h4>
      </Link>
      <p className="w-[405px] font-[500] text-[14px] text-text2 dark:text-darkText mt-2">
        {blog.description}
      </p>
      <BlogSeasCreatedAt allSeas={blog.allSeas} createdAt={blog.createdAt!} />
    </div>
  );
};

export { BlogItem };

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { BlogItemInterface } from "../../../types/blog-item";

import { BlogSeasCreatedAt } from "../../common/BlogSeasCreatedAt";
import { Link } from "../../common/Link";

interface BlogItemProps {
  blog: BlogItemInterface;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const formattedUpdateDate = convertDateToPersian(blog.updateDate)

  return (
    <div className="lg:w-[400px]">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.currentImageAddressTumb} className="w-[400px] h-[240px] object-fit rounded-md" />
        <h4 className="font-[700] text-[20px] text-text1 dark:text-darkText mt-5">
          {blog.title}
        </h4>
      </Link>
      <p className="w-[405px] font-[500] text-[14px] text-text2 dark:text-darkText mt-2">
        {blog.miniDescribe}
      </p>
      <BlogSeasCreatedAt allSeas={blog.totalCount} createdAt={formattedUpdateDate} />
    </div>
  );
};

export { BlogItem };

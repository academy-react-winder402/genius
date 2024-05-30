import { BlogItemInterface } from "../../../types/blog-item";
import { BlogSeasCreatedAt } from "../../common/BlogSeasCreatedAt";

interface BlogWriterBoxProps {
  blog: BlogItemInterface;
  createdAt: BlogSeasCreatedAt;
}

const BlogWriterBox = ({ blog, createdAt }: BlogWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img
        src={blog?.currentImageAddressTumb}
        className="blogDetailsWriterImage"
      />
      <span className="blogDetailsWriterName">{blog?.title}</span>
      <BlogSeasCreatedAt allSeas={createdAt} createdAt={createdAt} />
    </div>
  );
};

export { BlogWriterBox };

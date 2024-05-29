import { BlogItemInterface } from "../../../types/blog-item";

interface BlogWriterBoxProps {
  blog: BlogItemInterface;
}

const BlogWriterBox = ({ blog }: BlogWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img
        src={blog?.currentImageAddressTumb}
        className="blogDetailsWriterImage"
      />
      <span className="blogDetailsWriterName">{blog?.title}</span>
    </div>
  );
};

export { BlogWriterBox };

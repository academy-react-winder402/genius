import { BlogInterface } from "../../../types/blog";

interface BlogWriterBoxProps {
  blog: BlogInterface;
}

const BlogWriterBox = ({ blog }: BlogWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img
        src={blog?.currentImageAddressTumb}
        className="blogDetailsWriterImage"
      />
      <span className="blogDetailsWriterName">{blog?.addUserFullName}</span>
    </div>
  );
};

export { BlogWriterBox };

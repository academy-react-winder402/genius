import { BlogItemInterface } from "../../types/blog-items";

interface BlogDetailsWriterBoxProps {
  blog: BlogItemInterface;
}

const BlogDetailsWriterBox = ({ blog }: BlogDetailsWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img src={blog?.writerImage} className="blogDetailsWriterImage" />
      <span className="blogDetailsWriterName">{blog?.writerName}</span>
    </div>
  );
};

export { BlogDetailsWriterBox };

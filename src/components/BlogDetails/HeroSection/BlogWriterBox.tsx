import { BlogItemInterface } from "../../../types/blog-items";

interface BlogWriterBoxProps {
  blog: BlogItemInterface;
}

const BlogWriterBox = ({ blog }: BlogWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img src={blog?.writerImage} className="blogDetailsWriterImage" />
      <span className="blogDetailsWriterName">{blog?.writerName}</span>
    </div>
  );
};

export { BlogWriterBox };

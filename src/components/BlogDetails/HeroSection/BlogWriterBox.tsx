import { BlogInterface } from "../../../types/blog";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface BlogWriterBoxProps {
  blog: BlogInterface;
}

const BlogWriterBox = ({ blog }: BlogWriterBoxProps) => {
  return (
    <div className="blogDetailsWriterWrapper">
      <img src={blankThumbnail} className="blogDetailsWriterImage" />
      <span className="blogDetailsWriterName">{blog?.addUserFullName}</span>
    </div>
  );
};

export { BlogWriterBox };

import { useParams } from "react-router-dom";

import { blogItems } from "../Blogs/BlogsItems/blogItems";

import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";
import { BlogDetailsWriterBox } from "./BlogDetailsWriterBox";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blog = blogItems.find((blog) => blog.id == blogId);

  return (
    <div className="w-[83%] mx-auto">
      <div className="flex gap-5">
        <img src={blog?.image} />
        <div>
          <h1 className="blogDetailsTitle">{blog?.title}</h1>
          <p className="blogDetailsDescription">{blog?.longDescription}</p>
          <div className="flex justify-between">
            <BlogSeasCreatedAt
              allSeas={blog?.allSeas!}
              createdAt={blog?.createdAt!}
            />
            <BlogDetailsWriterBox blog={blog!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

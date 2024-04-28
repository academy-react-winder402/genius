import { useParams } from "react-router-dom";

import { blogItems } from "../Blogs/BlogsItems/blogItems";

import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blog = blogItems.find((blog) => blog.id == blogId);

  return (
    <div className="w-[83%] mx-auto">
      <div className="flex gap-5">
        <img src={blog?.image} />
        <div>
          <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
            {blog?.title}
          </h1>
          <p className="font-[400] text-text2 dark:text-darkText mt-2">
            {blog?.longDescription}
          </p>
          <div>
            <BlogSeasCreatedAt
              allSeas={blog?.allSeas!}
              createdAt={blog?.createdAt!}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

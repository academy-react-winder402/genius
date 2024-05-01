import { useParams } from "react-router-dom";

import { blogItems } from "../Blogs/BlogsItems/blogItems";

import { BlogHeroSection } from "./BlogHeroSection";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blog = blogItems.find((blog) => blog.id == blogId);

  return (
    <div className="w-[83%] mx-auto">
      <BlogHeroSection blog={blog!} />
    </div>
  );
};

export { BlogDetails };

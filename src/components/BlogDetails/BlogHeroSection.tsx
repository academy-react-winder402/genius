import { BlogItemInterface } from "../../types/blog-item";

import { BlogWriterBox } from "./HeroSection/BlogWriterBox";

interface BlogHeroSectionProps {
  blog: BlogItemInterface;
}

const BlogHeroSection = ({ blog }: BlogHeroSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <img src={blog?.currentImageAddressTumb} />
      <div>
        <h1 className="blogDetailsTitle">{blog?.title}</h1>
        <p className="blogDetailsDescription">{blog?.miniDescribe}</p>
        <div className="flex justify-between">
          <BlogWriterBox blog={blog} />
        </div>
      </div>
    </div>
  );
};

export { BlogHeroSection };

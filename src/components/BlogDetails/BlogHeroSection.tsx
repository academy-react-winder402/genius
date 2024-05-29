import { BlogItemInterface } from "../../types/blog-item";

import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";
import { BlogWriterBox } from "./HeroSection/BlogWriterBox";

interface BlogHeroSectionProps {
  blog: BlogItemInterface;
  createdAt: BlogSeasCreatedAt;
}

const BlogHeroSection = ({ blog, createdAt }: BlogHeroSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <img src={blog?.currentImageAddressTumb} />
      <div>
        <h1 className="blogDetailsTitle">{blog?.title}</h1>
        <p className="blogDetailsDescription">{blog?.miniDescribe}</p>
        <div className="flex justify-between">
          <BlogSeasCreatedAt
            allSeas={createdAt?.allSeas!}
            createdAt={createdAt?.createdAt!}
          />
          <BlogWriterBox blog={blog} />
        </div>
      </div>
    </div>
  );
};

export { BlogHeroSection };

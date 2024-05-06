import { BlogItemInterface } from "../../types/blog-items";

import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";
import { BlogWriterBox } from "./HeroSection/BlogWriterBox";

interface BlogHeroSectionProps {
  blog: BlogItemInterface;
}

const BlogHeroSection = ({ blog }: BlogHeroSectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <img src={blog?.image} />
      <div>
        <h1 className="blogDetailsTitle">{blog?.title}</h1>
        <p className="blogDetailsDescription">{blog?.longDescription}</p>
        <div className="flex justify-between">
          <BlogSeasCreatedAt
            allSeas={blog?.allSeas!}
            createdAt={blog?.createdAt!}
          />
          <BlogWriterBox blog={blog} />
        </div>
      </div>
    </div>
  );
};

export { BlogHeroSection };

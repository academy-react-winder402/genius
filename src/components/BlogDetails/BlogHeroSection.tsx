import { convertDateToPersian } from "../../core/utils/date-helper.utils";
import { BlogInterface } from "../../types/blog";
import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";
import { BlogWriterBox } from "./HeroSection/BlogWriterBox";

interface BlogHeroSectionProps {
  blog: BlogInterface;
}

const BlogHeroSection = ({ blog }: BlogHeroSectionProps) => {
  const formattedUpdateDate = convertDateToPersian(blog?.updateDate);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <img
        src={blog?.currentImageAddress}
        className="w-[400px] rounded-[10px]"
      />
      <div>
        <h1 className="blogDetailsTitle">{blog?.title}</h1>
        <p className="blogDetailsDescription">{blog?.miniDescribe}</p>
        <div className="flex justify-between">
          <BlogSeasCreatedAt
            allSeas={blog?.currentLikeCount}
            createdAt={formattedUpdateDate}
          />
          <BlogWriterBox blog={blog} />
        </div>
      </div>
    </div>
  );
};

export { BlogHeroSection };

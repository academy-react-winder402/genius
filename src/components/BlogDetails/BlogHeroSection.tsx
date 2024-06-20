import { convertDateToPersian } from "../../core/utils/date-helper.utils";

import { BlogInterface } from "../../types/blog";

import { BlogSeasCreatedAt } from "../common/BlogSeasCreatedAt";
import { BlogWriterBox } from "./HeroSection/BlogWriterBox";

import blankThumbnail from "../../assets/images/Courses/blank-thumbnail.jpg";

interface BlogHeroSectionProps {
  blog: BlogInterface;
}

const BlogHeroSection = ({ blog }: BlogHeroSectionProps) => {
  const formattedUpdateDate = convertDateToPersian(blog?.updateDate);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <img
        src={
          blog?.currentImageAddress &&
          blog?.currentImageAddress !== "Not-set" &&
          blog?.currentImageAddress !== "undefined"
            ? blog?.currentImageAddress
            : blankThumbnail
        }
        className="w-[400px] rounded-[10px]"
      />
      <div className="w-full">
        <h1 className="blogDetailsTitle">{blog?.title}</h1>
        <p className="blogDetailsDescription">{blog?.miniDescribe}</p>
        <div className="lg:flex justify-between">
          <BlogSeasCreatedAt
            allSeas={blog?.currentView}
            createdAt={formattedUpdateDate}
          />
          <BlogWriterBox blog={blog} />
        </div>
      </div>
    </div>
  );
};

export { BlogHeroSection };

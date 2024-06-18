import { useEffect, useState } from "react";

import { newsAPI } from "../../../core/services/api/news/news.api";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { NewsInterface } from "../../../types/news";

import { BlogItemSkeleton } from "../../common/BlogItemSkeleton";
import { BlogItemStyleTwo } from "./BlogItemStyleTwo";
import { LandingBlogItem } from "./LandingBlogItem";

const LandingBlogItemsMapped = () => {
  const [firstNews, setFirstNews] = useState<NewsInterface>();
  const [secondNews, setSecondNews] = useState<NewsInterface[]>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const getNews = await newsAPI(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined
        );

        const getFirstNews = getNews.news.slice(0);
        const getSecondThirdNews = getNews.news.slice(1, 4);

        setFirstNews(getFirstNews[0]);
        setSecondNews(getSecondThirdNews);
      } catch (error) {
        return false;
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {firstNews && secondNews ? (
        <div className="lg:flex gap-4 justify-between mt-7">
          <div>
            <BlogItemStyleTwo
              id={firstNews?.id!}
              image={firstNews?.currentImageAddressTumb!}
              allSeas={firstNews?.totalCount!}
              createdAt={convertDateToPersian(firstNews?.updateDate!)}
              title={firstNews?.title!}
              description={firstNews?.miniDescribe!}
            />
          </div>
          <div className="flex flex-col gap-8 mt-10 lg:mt-0">
            {secondNews &&
              secondNews.map((blog) => (
                <LandingBlogItem key={blog.id} blog={blog} />
              ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-7 lg:pl-10">
          <div className="landingBlogItemsSkeleton">
            <BlogItemSkeleton />
            <BlogItemSkeleton />
            <BlogItemSkeleton />
          </div>
          <div className="landingBlogItemsSkeletonHidden">
            <BlogItemSkeleton />
            <BlogItemSkeleton />
            <BlogItemSkeleton />
          </div>
          <div className="landingBlogItemsSkeletonHidden">
            <BlogItemSkeleton />
            <BlogItemSkeleton />
            <BlogItemSkeleton />
          </div>
        </div>
      )}
    </div>
  );
};

export { LandingBlogItemsMapped };

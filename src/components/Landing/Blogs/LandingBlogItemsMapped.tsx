import { toast } from "react-toastify";

import { useNews } from "../../../hooks/news/useNews";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { BlogItemSkeleton } from "../../common/BlogItemSkeleton";
import { BlogItemStyleTwo } from "./BlogItemStyleTwo";
import { LandingBlogItem } from "./LandingBlogItem";

const LandingBlogItemsMapped = () => {
  const { data, isLoading, error } = useNews(
    1,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  if (error) toast.error("مشکلی در دریافت اخبار به وجود آمد !");

  const firstNews = data?.news[0];
  const otherNews = data?.news.slice(1, 4);

  return (
    <div>
      {isLoading ? (
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
      ) : (
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
            {otherNews &&
              otherNews.map((blog) => (
                <LandingBlogItem key={blog.id} blog={blog} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LandingBlogItemsMapped };

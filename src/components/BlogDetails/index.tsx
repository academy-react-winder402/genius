import { useQueryClient } from "@tanstack/react-query";
import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAddNewsComment } from "../../hooks/news/comments/useAddNewsComment";
import { useNewsById } from "../../hooks/news/useNewsById";
import { useNewsRate } from "../../hooks/news/useNewsRate";

import { loadDescribe } from "../../core/utils/load-describe.utils";
import { commentFormSchema } from "../../core/validations/comment-form.validation";

import { BlockInterface } from "../../types/block";

import { CommentForm } from "../common/CommentForm";
import { Comments } from "../common/Comments";
import { Satisfaction } from "../common/Satisfaction";
import { BlogHeroSection } from "./BlogHeroSection";
import { ShareBox } from "./ShareBox";

const BlogDetails = () => {
  const { blogId } = useParams();

  const queryClient = useQueryClient();
  const { data, error } = useNewsById(blogId);
  const addNewsRate = useNewsRate();
  const addNewsComment = useAddNewsComment();

  if (error) toast.error("مشکلی در دریافت خبر به وجود آمد !");

  let convertedDescribe: string | { blocks: BlockInterface[] };

  try {
    const convertDescribe = JSON.parse(data?.detailsNewsDto.describe!);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = data?.detailsNewsDto.describe!;
  }

  const handleRateChange = async (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    addNewsRate.mutate({ newsId: blogId!, rateNumber: newValue! });
  };

  const onSubmit = async (e: { title: string; describe: string }) => {
    addNewsComment.mutate({
      title: e.title,
      describe: e.describe,
      newsId: blogId!,
    });

    e.title = "";
    e.describe = "";

    queryClient.invalidateQueries({
      queryKey: ["newsReplyComments"],
    });
  };

  return (
    <div className="w-[83%] mx-auto">
      <BlogHeroSection blog={data?.detailsNewsDto!} />
      <div className="flex justify-center mt-10">
        <div className="lg:w-[70%]">
          <div className="mt-7">
            <h1 className="font-[700] text-[27px] lg:text-[32px] text-text1 dark:text-darkText">
              {data?.detailsNewsDto.title}
            </h1>
            <p className="font-[500] text-text2 dark:text-darkText mt-2 leading-7">
              {loadDescribe(convertedDescribe)}
            </p>
          </div>
          <ShareBox />
          <Satisfaction
            nameData="مقاله"
            likeCount={data?.detailsNewsDto.currentLikeCount!}
            disLikeCount={data?.detailsNewsDto.currentDissLikeCount!}
            rateCount={data?.detailsNewsDto.currentRate!}
            currentUserRateNumber={data?.detailsNewsDto.currentUserRateNumber!}
            handleRateChange={handleRateChange}
            newsId={data?.detailsNewsDto.id}
            likeId={data?.detailsNewsDto.likeId!}
            isLike={data?.detailsNewsDto.currentUserIsLike!}
            isDislike={data?.detailsNewsDto.currentUserIsDissLike!}
          />
          <div className="blogDetailsCommentsSection">
            <h3 className="blogDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>
            <CommentForm
              onSubmit={onSubmit}
              validationSchema={commentFormSchema}
            />
            <Comments newsId={blogId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

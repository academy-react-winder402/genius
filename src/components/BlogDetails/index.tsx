import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getNewsByIdAPI } from "../../core/services/api/news/get-news-by-id";

import { CommentForm } from "../common/CommentForm";
import { Comments } from "../common/Comments";
import { Satisfaction } from "../common/Satisfaction";
import { BlogHeroSection } from "./BlogHeroSection";
import { ShareBox } from "./ShareBox";

import { addCommentNewsAPI } from "../../core/services/api/news/comments/add-comment-news.api";
import { convertDateToPersian } from "../../core/utils/date-helper.utils";
import { onFormData } from "../../core/utils/form-data-helper.utils";
import { commentFormSchema } from "../../core/validations/comment-form.validation";
import { BlogInterface } from "../../types/blog";
import { NewsComments } from "../common/NewsComments";
import { useNewsById } from "../../hooks/news/useNewsById";
import { BlockInterface } from "../../types/block";
import { loadDescribe } from "../../core/utils/load-describe.utils";

const BlogDetails = () => {
  const [likeCount, setLikeCount] = useState<number>();
  const [disLikeCount, setDislikeCount] = useState<number>();

  const { blogId } = useParams();

  const { data, error } = useNewsById(blogId);

  if (error) toast.error("مشکلی در دریافت خبر به وجود آمد !");

  let convertedDescribe: string | { blocks: BlockInterface[] };

  try {
    const convertDescribe = JSON.parse(data?.detailsNewsDto.describe!);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = data?.detailsNewsDto.describe!;
  }

  // const formattedUpdateDate = convertDateToPersian(
  //   data?.detailsNewsDto.updateDate!
  // );

  const onSubmit = async (e: { describe: string }) => {
    try {
      const formData = onFormData({
        id: blogId,
        title: e.describe,
        describe,
      });

      const sendComment = await toast.promise(addCommentNewsAPI(formData), {
        pending: "در حال ارسال نظر ...",
      });

      if (sendComment.success) toast.success("نظر شما با موفقیت ثبت شد !");
      else toast.error("مشکلی در ارسال نظر به وجود آمد !");
    } catch (error) {
      toast.error("مشکلی در ارسال نظر به وجود آمد !");
    }
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
            commentCount={0}
            currentUserRateNumber={0}
            handleRateChange={(e) => console.log(e)}
            newsId={data?.detailsNewsDto.id}
            likeId={data?.detailsNewsDto.likeId!}
            isLike={data?.detailsNewsDto.currentUserIsLike!}
            isDislike={data?.detailsNewsDto.currentUserIsDissLike!}
          />
          <div className="blogDetailsCommentsSection">
            <h3 className="blogDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>
            <NewsComments id={data?.detailsNewsDto.id!} />
            <CommentForm
              onSubmit={onSubmit}
              validationSchema={commentFormSchema}
            />
            <Comments courseId={data?.detailsNewsDto.id!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

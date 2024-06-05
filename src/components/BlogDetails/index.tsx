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

const BlogDetails = () => {
  const [news, setNews] = useState<BlogInterface>();
  const [likeCount, setLikeCount] = useState<number>();
  const [disLikeCount, setDislikeCount] = useState<number>();

  const { blogId } = useParams();

  const formattedUpdateDate = convertDateToPersian(news?.updateDate!);

  const onSubmit = async (e: { describe: string }) => {
    try {
      const formData = onFormData({
        id,
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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getNewsByIdAPI(blogId!);

        console.log(response.detailsNewsDto);

        setNews(response.detailsNewsDto);
      } catch (error) {
        return false;
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="w-[83%] mx-auto">
      <BlogHeroSection blog={news!} />
      <div className="flex justify-center mt-10">
        <div className="lg:w-[70%]">
          <div className="mt-7">
            <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
              {news?.title}
            </h1>
            <div>
              <p className="font-[500] text-text2 dark:text-darkText mt-2 leading-7">
                {news?.describe}
              </p>
            </div>
          </div>
          <ShareBox />
          <Satisfaction
            nameData="مقاله"
            likeCount={0}
            disLikeCount={0}
            setLikeCount={setLikeCount}
            setDislikeCount={setDislikeCount}
            commentCount={0}
            currentUserRateNumber={0}
            handleRateChange={(e) => console.log(e)}
          />
          <div className="blogDetailsCommentsSection">
            <h3 className="blogDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>
            <NewsComments id={news?.id!} />
            <CommentForm
              onSubmit={onSubmit}
              validationSchema={commentFormSchema}
            />
            <Comments courseId={news?.id!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { blogItems } from "../../core/data/blogs/blogItems";
import { getNewsByIdAPI } from "../../core/services/api/news/get-news-by-id";

import { BlogHeroSection } from "./BlogHeroSection";
import { ShareBox } from "./ShareBox";
import { Satisfaction } from "../common/Satisfaction";
import { CommentForm } from "../common/CommentForm";
import { Comments } from "../common/Comments";

import videoPlayerImage from "../../assets/images/BlogDetails/video-player.png";

import { AddComment } from "../common/AddComment";
import { NewsInterface } from "../../types/news";
import { NewsComments } from "../common/NewsComments";
import { addCommentFormSchema } from "../../core/validations/add-comment.-formvalidation";
import { onFormData } from "../../core/utils/form-data-helper.utils";
import { addCommentNewsAPI } from "../../core/services/api/news/comments/add-comment-news.api";
import { toast } from "react-toastify";

interface NewsDetailsDescription {
  value: number;
  description: string;
  title: string;
  Id: string;
}

const BlogDetails = ({
  value,
  description,
  title,
  Id,
}: NewsDetailsDescription) => {
  const [news, setNews] = useState<NewsInterface>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsByIdAPI(news?.id!);

        setNews(response);
      } catch (error) {
        return false;
      }
    };

    if (news) fetchNews();
  }, [news]);
  const { blogId } = useParams();

  const blog = blogItems.find((blog) => blog.id == 1);

  const onSubmit = async (e: { describe: string }) => {
    try {
      const formData = onFormData({
        Id,
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
      <BlogHeroSection blog={blog} />
      <div className="flex justify-center mt-10">
        <div className="lg:w-[70%]">
          <div className="mt-7">
            <h1 className="font-[700] text-[32px] text-text1 dark:text-darkText">
              {title}
            </h1>
            <p className="font-[500] text-text2 dark:text-darkText mt-2">
              {description}
            </p>
          </div>

          <div className="flex justify-center mt-9 mb-4">
            <img src={videoPlayerImage} />
          </div>
          <ShareBox />
          <Satisfaction
            nameData="مقاله"
            likeCount={0}
            disLikeCount={0}
            setLikeCount={function (prevValue: number): void {
              throw new Error("Function not implemented.");
            }}
            setDislikeCount={function (dislikeCount: number): void {
              throw new Error("Function not implemented.");
            }}
            commentCount={0}
            courseId={""}
            currentUserRateNumber={0}
          />
          <div className="blogDetailsCommentsSection">
            <h3 className="blogDetailsCommentsText">
              نظر کاربران درباره این مقاله
            </h3>

            <AddComment
              onSubmit={onSubmit}
              validationSchema={addCommentFormSchema}
            />
            <NewsComments Id={blogId} />

            <CommentForm />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogDetails };

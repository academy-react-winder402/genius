import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDislikeCourse } from "../../../hooks/course/useDislikeCourse";
import { useLikeCourse } from "../../../hooks/course/useLikeCourse";
import { useDeleteLikeNews } from "../../../hooks/news/useDeleteLikeNews";
import { useNewsDislike } from "../../../hooks/news/useNewsDislike";
import { useNewsLike } from "../../../hooks/news/useNewsLike";

import { handleScroll } from "../../../core/utils/scroll-helper.utils";

import { useDarkModeSelector } from "../../../redux/darkMode";
import { useIsUserLogin } from "../../../redux/user-login";

import disLikeDarkIcon from "../../../assets/images/CourseDetails/Icons/dislike-dark.svg";
import disLikeIcon from "../../../assets/images/CourseDetails/Icons/dislike.svg";
import likeDarkIcon from "../../../assets/images/CourseDetails/Icons/like-dark.svg";
import likeIcon from "../../../assets/images/CourseDetails/Icons/like.svg";

interface LikeDislikeProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  courseId?: string;
  newsId?: string;
  likeId: string;
  isLike: boolean;
  isDislike: boolean;
}

const LikeDislike = ({
  nameData,
  likeCount,
  disLikeCount,
  courseId,
  newsId,
  likeId,
  isLike,
  isDislike,
}: LikeDislikeProps) => {
  const navigate = useNavigate();

  const darkMode = useDarkModeSelector();
  const isUserLogin = useIsUserLogin();

  const likeNews = useNewsLike();
  const deleteNewsLike = useDeleteLikeNews(newsId!);
  const likeCourse = useLikeCourse();
  const dislikeNews = useNewsDislike();
  const dislikeCourse = useDislikeCourse();

  const unAuthenticatedLikeDislikeAction = (data: string) => {
    toast.error(`برای ${data} کردن باید وارد سایت شوید ...`);

    handleScroll();
    navigate("/login");
  };

  const handleLike = () => {
    try {
      if (isUserLogin === true) {
        if (newsId) {
          if (isLike) deleteNewsLike.mutate(likeId);
          else likeNews.mutate(newsId);
        } else likeCourse.mutate(courseId!);
      } else unAuthenticatedLikeDislikeAction("لایک");
    } catch (error) {
      toast.error("مشکلی در لایک کردن به وجود آمد ...");
    }
  };

  const handleDislike = async () => {
    if (isUserLogin === true) {
      try {
        if (newsId) {
          if (isDislike) deleteNewsLike.mutate(likeId);
          else dislikeNews.mutate(newsId);
        } else dislikeCourse.mutate(courseId!);
      } catch (error) {
        toast.error("مشکلی در ثبت دیس لایک به وجود آمد !");
      }
    } else {
      unAuthenticatedLikeDislikeAction("لایک");
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2">
      <span className="font-[500] text-text2 dark:text-darkText">
        آیا از این {nameData} راضی بودید؟
      </span>
      <div className="flex gap-2">
        <button
          className={`likeDislikeButton ${isLike && "bg-green-400"}`}
          onClick={handleLike}
        >
          <img src={darkMode ? likeDarkIcon : likeIcon} />
          <span className="likeDislikeButtonText">{likeCount}</span>
        </button>
        <button
          className={`likeDislikeButton ${isDislike == true && "bg-red/50"}`}
          onClick={handleDislike}
        >
          <img src={darkMode ? disLikeDarkIcon : disLikeIcon} />
          <span className="likeDislikeButtonText">{disLikeCount}</span>
        </button>
      </div>
    </div>
  );
};

export { LikeDislike };

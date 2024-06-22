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
import { useDeleteCourseLike } from "../../../hooks/course/useDeleteCourseLike";

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
  const deleteCourseLike = useDeleteCourseLike();
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
        if (isLike)
          newsId
            ? deleteNewsLike.mutate(likeId)
            : deleteCourseLike.mutate(likeId);
        else newsId ? likeNews.mutate(newsId) : likeCourse.mutate(courseId!);
      } else unAuthenticatedLikeDislikeAction("لایک");
    } catch (error) {
      toast.error("مشکلی در لایک کردن به وجود آمد ...");
    }
  };

  const handleDislike = async () => {
    if (isUserLogin === true) {
      try {
        if (isDislike)
          newsId
            ? deleteNewsLike.mutate(likeId)
            : deleteCourseLike.mutate(likeId);
        else
          newsId ? dislikeNews.mutate(newsId) : dislikeCourse.mutate(courseId!);
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
          className={`likeDislikeButton ${
            isLike && "bg-green-400 dark:bg-green-900"
          }`}
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

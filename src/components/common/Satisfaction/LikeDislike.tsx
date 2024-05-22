import { toast } from "react-toastify";

import { addLikeForCourseAPI } from "../../../core/services/api/course/add-like-for-course.api";
import { addDislikeForCourseAPI } from "../../../core/services/api/course/add-dislike-course.api";

import { useIsUserLogin } from "../../../redux/user-login";
import { useDarkModeSelector } from "../../../redux/darkMode";

import likeIcon from "../../../assets/images/CourseDetails/Icons/like.svg";
import disLikeIcon from "../../../assets/images/CourseDetails/Icons/dislike.svg";
import likeDarkIcon from "../../../assets/images/CourseDetails/Icons/like-dark.svg";
import disLikeDarkIcon from "../../../assets/images/CourseDetails/Icons/dislike-dark.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface LikeDislikeProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  courseId: string;
  setLikeCount: (likeCount: number) => void;
  setDislikeCount: (dislikeCount: number) => void;
}

const LikeDislike = ({
  nameData,
  likeCount,
  disLikeCount,
  setLikeCount,
  setDislikeCount,
  courseId,
}: LikeDislikeProps) => {
  const [isLike, setIsLike] = useState<boolean>();

  const navigate = useNavigate();

  const darkMode = useDarkModeSelector();
  const isUserLogin = useIsUserLogin();

  const unAuthenticatedLikeDislikeAction = (data: string) => {
    toast.error(`برای ${data} کردن باید وارد سایت شوید ...`);
    navigate("/login");
  };

  const handleLike = async () => {
    try {
      if (isUserLogin === true) {
        const likeCourse = await toast.promise(addLikeForCourseAPI(courseId), {
          pending: "در حال لایک کردن ...",
        });

        if (likeCourse.success) {
          toast.success("دوره با موفقیت لایک شد !");
          setLikeCount((prevValue: number) => prevValue + 1);
          setDislikeCount((prevValue: number) => prevValue - 1);
          setIsLike(true);
        } else {
          toast.error(likeCourse.message);
        }
      } else unAuthenticatedLikeDislikeAction("لایک");
    } catch (error) {
      toast.error("مشکلی در لایک کردن به وجود آمد ...");
    }
  };

  const handleDislike = async () => {
    if (isUserLogin === true) {
      try {
        const dislikeCourse = await toast.promise(
          addDislikeForCourseAPI(courseId),
          {
            pending: "در حال دیس لایک کردن ...",
          }
        );

        if (dislikeCourse.success) {
          toast.success("با موفقیت دیس لایک شد !");
          setLikeCount((prevValue: number) => prevValue - 1);
          setDislikeCount((prevValue: number) => prevValue + 1);
          setIsLike(false);
        } else {
          toast.error(dislikeCourse.message);
        }
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
          className={`likeDislikeButton ${!isLike && "bg-red/50"}`}
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

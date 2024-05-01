import { useDarkModeSelector } from "../../../redux/darkMode";

import likeIcon from "../../../assets/images/CourseDetails/Icons/like.svg";
import disLikeIcon from "../../../assets/images/CourseDetails/Icons/dislike.svg";
import likeDarkIcon from "../../../assets/images/CourseDetails/Icons/like-dark.svg";
import disLikeDarkIcon from "../../../assets/images/CourseDetails/Icons/dislike-dark.svg";

interface LikeDislikeProps {
  nameData: string;
}

const LikeDislike = ({ nameData }: LikeDislikeProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="flex gap-4 items-center mt-2">
      <span className="font-[500] text-text2 dark:text-darkText">
        آیا از این {nameData} راضی بودید؟
      </span>
      <div className="flex gap-2">
        <button className="likeDislikeButton">
          <img src={darkMode ? likeDarkIcon : likeIcon} />
          <span className="likeDislikeButtonText">22</span>
        </button>
        <button className="likeDislikeButton">
          <img src={darkMode ? disLikeDarkIcon : disLikeIcon} />
          <span className="likeDislikeButtonText">0</span>
        </button>
      </div>
    </div>
  );
};

export { LikeDislike };

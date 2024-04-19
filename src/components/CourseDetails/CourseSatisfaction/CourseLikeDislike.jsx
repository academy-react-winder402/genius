import likeIcon from "../../../assets/images/CourseDetails/Icons/like.svg";
import disLikeIcon from "../../../assets/images/CourseDetails/Icons/dislike.svg";

const CourseLikeDislike = () => {
  return (
    <div className="flex gap-4 items-center mt-2">
      <span className="font-[500] text-text2">آیا از این دوره راضی بودید؟</span>
      <div className="flex gap-2">
        <button className="likeDislikeButton">
          <img src={likeIcon} />
          <span className="likeDislikeButtonText">22</span>
        </button>
        <button className="likeDislikeButton">
          <img src={disLikeIcon} />
          <span className="likeDislikeButtonText">0</span>
        </button>
      </div>
    </div>
  );
};

export { CourseLikeDislike };

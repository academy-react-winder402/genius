import { LikeDislike } from "./LikeDislike";
import { Rating } from "./Rating";

interface SatisfactionProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  setLikeCount: (prevValue: number) => void;
  setDislikeCount: (dislikeCount: number) => void;
  commentCount: number;
  courseId: string;
  currentUserRateNumber: number;
}

const Satisfaction = ({
  nameData,
  likeCount,
  disLikeCount,
  setLikeCount,
  setDislikeCount,
  commentCount,
  courseId,
  currentUserRateNumber,
}: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating
        courseId={courseId}
        commentCount={commentCount}
        currentUserRateNumber={currentUserRateNumber}
      />
      <LikeDislike
        nameData={nameData}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        courseId={courseId}
        setLikeCount={setLikeCount}
        setDislikeCount={setDislikeCount}
      />
    </div>
  );
};

export { Satisfaction };

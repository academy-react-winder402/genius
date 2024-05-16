import { LikeDislike } from "./LikeDislike";
import { Rating } from "./Rating";

interface SatisfactionProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  setLikeCount: (prevValue: number) => void;
  setDislikeCount: (dislikeCount: number) => void;
  rateCount: string;
  commentCount: number;
  courseId: string;
}

const Satisfaction = ({
  nameData,
  likeCount,
  disLikeCount,
  setLikeCount,
  setDislikeCount,
  rateCount,
  commentCount,
  courseId,
}: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating rateCount={rateCount} commentCount={commentCount} />
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

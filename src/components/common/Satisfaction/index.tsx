import { SyntheticEvent } from "react";
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
  handleRateChange: (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => void;
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
  handleRateChange,
}: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating
        commentCount={commentCount}
        currentUserRateNumber={currentUserRateNumber}
        handleRateChange={handleRateChange}
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

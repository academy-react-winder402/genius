import { SyntheticEvent } from "react";

import { LikeDislike } from "./LikeDislike";
import { Rating } from "./Rating";

interface SatisfactionProps {
  nameData: string;
  likeCount: number;
  disLikeCount: number;
  commentCount: number;
  courseId?: string;
  newsId?: string;
  currentUserRateNumber: number;
  handleRateChange: (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => void;
  likeId: string;
  isLike: boolean;
  isDislike: boolean;
}

const Satisfaction = ({
  nameData,
  likeCount,
  disLikeCount,
  commentCount,
  courseId,
  newsId,
  currentUserRateNumber,
  handleRateChange,
  likeId,
  isLike,
  isDislike
}: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating
        commentCount={commentCount}
        currentUserRateNumber={currentUserRateNumber}
        handleRateChange={handleRateChange}
      />
      <LikeDislike
        newsId={newsId}
        nameData={nameData}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        courseId={courseId}
        likeId={likeId}
        isLike={isLike}
        isDislike={isDislike}
      />
    </div>
  );
};

export { Satisfaction };

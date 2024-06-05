import { SyntheticEvent } from "react";
import { toast } from "../toast";

import emptyRatingIcon from "../../../assets/images/CourseDetails/Icons/star-empty.svg";
import ratingIcon from "../../../assets/images/CourseDetails/Icons/star.svg";

interface RatingProps {
  commentCount: number;
  currentUserRateNumber: number;
  handleRateChange: (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => void;
}

const Rating = ({
  commentCount,
  currentUserRateNumber,
  handleRateChange,
}: RatingProps) => {
  return (
    <div className="flex items-center gap-4">
      <CommonRating
        name="امتیاز دهی دوره"
        icon={<img src={ratingIcon} />}
        emptyIcon={<img src={emptyRatingIcon} />}
        classes={{ root: "flex gap-2", icon: "w-[24px] h-[24px]" }}
        value={currentUserRateNumber}
        dir="ltr"
        precision={0.5}
        onChange={handleRateChange}
        readOnly={currentUserRateNumber ? true : false}
      />
      <span className="font-[500] text-text1 dark:text-darkText mt-2">
        امتیاز {commentCount} نفر
      </span>
      <button className="courseDetailAddComment">ثبت دیدگاه</button>
    </div>
  );
};

export { Rating };

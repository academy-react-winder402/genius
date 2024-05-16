import { Rating as CommonRating } from "../Rating";

import emptyRatingIcon from "../../../assets/images/CourseDetails/Icons/star-empty.svg";
import ratingIcon from "../../../assets/images/CourseDetails/Icons/star.svg";

interface RatingProps {
  rateCount: string;
  commentCount: number;
}

const Rating = ({ rateCount, commentCount }: RatingProps) => {
  return (
    <div className="flex items-center gap-4">
      <CommonRating
        name="امتیاز دهی دوره"
        readOnly={true}
        icon={<img src={ratingIcon} />}
        emptyIcon={<img src={emptyRatingIcon} />}
        classes={{ root: "flex gap-2", icon: "w-[24px] h-[24px]" }}
        value={parseFloat(rateCount)}
        dir="ltr"
      />
      <span className="font-[500] text-text1 dark:text-darkText mt-2">
        امتیاز {commentCount} نفر
      </span>
      <button className="courseDetailAddComment">ثبت دیدگاه</button>
    </div>
  );
};

export { Rating };

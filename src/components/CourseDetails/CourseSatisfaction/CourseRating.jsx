import { Rating } from "../../common/Rating";

import emptyRatingIcon from "../../../assets/images/CourseDetails/Icons/star-empty.svg";
import ratingIcon from "../../../assets/images/CourseDetails/Icons/star.svg";

const CourseRating = () => {
  return (
    <div className="flex items-center gap-4">
      <Rating
        name="امتیاز دهی دوره"
        readOnly={true}
        icon={<img src={ratingIcon} />}
        emptyIcon={<img src={emptyRatingIcon} />}
        classes={{ root: "flex gap-2", icon: "w-[24px] h-[24px]" }}
        value="3.4"
        dir="ltr"
      />
      <span className="font-[500] text-text1 mt-2">امتیاز 20 نفر</span>
      <button className="bg-primary text-white w-[81px] h-[32px] rounded-[50px] outline-none shadow-courseAddCommentButton font-[700] text-[12px] mt-2">
        ثبت دیدگاه
      </button>
    </div>
  );
};

export { CourseRating };

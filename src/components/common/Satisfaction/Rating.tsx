import { SyntheticEvent } from "react";

import { Rating as CommonRating } from "../Rating";
import { toast } from "../toast";

import emptyRatingIcon from "../../../assets/images/CourseDetails/Icons/star-empty.svg";
import ratingIcon from "../../../assets/images/CourseDetails/Icons/star.svg";
import { setCourseRatingAPI } from "../../../core/services/api/course/set-course-rating.api";

interface RatingProps {
  courseId: string;
  commentCount: number;
  currentUserRateNumber: number;
}

const Rating = ({
  courseId,
  commentCount,
  currentUserRateNumber,
}: RatingProps) => {
  const handleRateChange = async (
    e: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    try {
      const addRate = await toast.promise(
        setCourseRatingAPI(courseId, newValue!),
        {
          pending: "در حال افزودن امتیاز ...",
        }
      );

      if (addRate.success) toast.success("امتیاز شما با موفقیت ثبت شد !");
      else toast.error(addRate.message);
    } catch (error) {
      toast.error("مشکلی در افزودن امتیاز به وجود آمد !");
    }
  };

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

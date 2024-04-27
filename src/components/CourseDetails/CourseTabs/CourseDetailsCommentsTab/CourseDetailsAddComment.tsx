import { useDarkModeSelector } from "../../../../redux/darkMode";

import dotsOneIcon from "../../../../assets/images/CourseDetails/Icons/textarea-dots-1.svg";
import dotsTwoIcon from "../../../../assets/images/CourseDetails/Icons/textarea-dots-1.svg";
import dotsThreeIcon from "../../../../assets/images/CourseDetails/Icons/textarea-dots-1.svg";

const CourseDetailsAddComment = () => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="flex gap-4 flex-col items-center">
      <div className="w-full relative">
        <textarea
          placeholder="نظر خودتو بنویس..."
          className="courseDetailsAddCommentTextarea"
        />
        <img src={dotsOneIcon} className="absolute bottom-8 left-4" />
        <img src={dotsTwoIcon} className="absolute bottom-6 left-4" />
        <img src={dotsThreeIcon} className="absolute bottom-6 left-6" />
      </div>
      <button className="mainButton w-[84px] h-[48px]">ارسال</button>
    </div>
  );
};

export { CourseDetailsAddComment };

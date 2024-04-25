import { useDarkModeSelector } from "../../../../redux/darkMode";

import heartIcon from "../../../../assets/images/CourseDetails/Icons/heart.svg";
import messagesIcon from "../../../../assets/images/CourseDetails/Icons/messages.svg";
import messagesDarkIcon from "../../../../assets/images/CourseDetails/Icons/messages-dark.svg";

interface CourseDetailsCommentItemProps {
  avatarImage: string;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
}

const CourseDetailsCommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
}: CourseDetailsCommentItemProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div
      className={isChildren ? "border-r border-courseDetailsCommentsBorder mr-8 pr-5" : ""}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={avatarImage} className="w-[32px] h-[32px]" />
          <span className="font-[500] text-text1 dark:text-darkText">
            {name}
          </span>
        </div>
        <div className={isChildren ? "pl-2" : "pl-4"}>
          <span className="font-[400] text-[12px] text-text3 dark:text-darkText">
            {createdAt}
          </span>
        </div>
      </div>
      <div>
        <p className="font-[400] text-[14px] text-text2 dark:text-darkText mt-2">
          {message}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-1 items-center mt-2">
          <span className="font-[700] text-[14px] text-red">7</span>
          <img src={heartIcon} />
        </div>
        <div className="flex gap-1 mt-1">
          <span className="font-[400] text-[14px] text-text2 dark:text-darkText">
            پاسخ
          </span>
          <img src={darkMode ? messagesDarkIcon : messagesIcon} />
        </div>
      </div>
    </div>
  );
};

export { CourseDetailsCommentItem };

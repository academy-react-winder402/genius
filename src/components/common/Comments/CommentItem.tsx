import { useDarkModeSelector } from "../../../redux/darkMode";

import heartIcon from "../../../assets/images/common/Comments/Icons/heart.svg";
import messagesIcon from "../../../assets/images/common/Comments/Icons/messages.svg";
import messagesDarkIcon from "../../../assets/images/common/Comments/Icons/messages-dark.svg";

interface CommentItemProps {
  avatarImage: string;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
}: CommentItemProps) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className={isChildren ? "childrenComment" : ""}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={avatarImage} className="commentAvatarImage" />
          <span className="commentName">{name}</span>
        </div>
        <div className={isChildren ? "pl-2" : "pl-4"}>
          <span className="commentCreatedAtText">{createdAt}</span>
        </div>
      </div>
      <div>
        <p className="commentMessageText">{message}</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-1 items-center mt-2">
          <span className="commentLikeCount">7</span>
          <img src={heartIcon} />
        </div>
        <div className="flex gap-1 mt-1">
          <span className="commentAnswerText">پاسخ</span>
          <img src={darkMode ? messagesDarkIcon : messagesIcon} />
        </div>
      </div>
    </div>
  );
};

export { CommentItem };

import { Dispatch, SetStateAction, useEffect } from "react";
import { useDarkModeSelector } from "../../../redux/darkMode";

import { getCourseReplyCommentsAPI } from "../../../core/services/api/course/comments/get-course-reply-comments.api";

import { CommentInterface } from "../../../types/comment";

import { toast } from "../toast";

import heartIcon from "../../../assets/images/common/Comments/Icons/heart.svg";
import messagesDarkIcon from "../../../assets/images/common/Comments/Icons/messages-dark.svg";
import messagesIcon from "../../../assets/images/common/Comments/Icons/messages.svg";

interface CommentItemProps {
  avatarImage: string;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
  courseId?: string;
  commentId?: string;
  setReplyComment?: Dispatch<SetStateAction<CommentInterface[] | undefined>>;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
  courseId,
  commentId,
  setReplyComment,
}: CommentItemProps) => {
  const darkMode = useDarkModeSelector();

  setReplyComment &&
    courseId &&
    useEffect(() => {
      const fetchReplyComment = async () => {
        try {
          const getReplyComment = await getCourseReplyCommentsAPI(
            courseId,
            commentId!
          );

          courseId && setReplyComment && setReplyComment(getReplyComment);
        } catch (error) {
          toast.error("مشکلی در دریافت رپلای های کامنت به وجود آمد !");
        }
      };

      fetchReplyComment();
    }, [courseId]);

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
        <div className="flex gap-1 mt-1 cursor-pointer">
          <span className="commentAnswerText">پاسخ</span>
          <img src={darkMode ? messagesDarkIcon : messagesIcon} />
        </div>
      </div>
    </div>
  );
};

export { CommentItem };

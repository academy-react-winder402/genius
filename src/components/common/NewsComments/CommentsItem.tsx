import { Dispatch, SetStateAction, useEffect } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { getNewsReplyCommentsAPI } from "../../../core/services/api/news/comments/get-news-reply-comments.api";

import { CommentInterface } from "../../../types/comment";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { toast } from "../toast";

import messagesDarkIcon from "../../../assets/images/common/Comments/Icons/messages-dark.svg";
import messagesIcon from "../../../assets/images/common/Comments/Icons/messages.svg";
import { addNewsCommentLikeAPI } from "../../../core/services/api/news/comments/add-news-comment-like.api";
import { deleteNewsCommentLikeAPI } from "../../../core/services/api/news/comments/delet-News-Comment-Like.api";

interface CommentItemProps {
  avatarImage: string;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
  id?: string;
  commentId?: string;
  setReplyComment?: Dispatch<SetStateAction<CommentInterface[] | undefined>>;
  likeCount: number;
  currentUserLikeId: string;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
  id,
  commentId,
  setReplyComment,
  likeCount,
  currentUserLikeId,
}: CommentItemProps) => {
  const darkMode = useDarkModeSelector();

  const handleAddLike = async () => {
    try {
      const likeComment = await toast.promise(
        addNewsCommentLikeAPI(commentId!),
        {
          pending: "در حال لایک کردن نظر ...",
        }
      );

      if (likeComment.success) toast.success("نظر با موفقیت لایک شد ...");
      else handleDeleteLike();
    } catch (error) {
      toast.error("مشکلی در لایک کردن نظر به وجود آمد ...");
    }
  };

  const handleDeleteLike = async () => {
    try {
      const deleteLike = await toast.promise(
        deleteNewsCommentLikeAPI(commentId!),
        {
          pending: "در حال حذف لایک ...",
        }
      );

      if (deleteLike.success) toast.success("لایک شما با موفقیت حذف شد ...");
      else toast.error(deleteLike.message);
    } catch (error) {
      toast.error("مشکلی در حذف لایک نظر به وجود آمد !");
    }
  };

  setReplyComment &&
    id &&
    useEffect(() => {
      const fetchReplyComment = async () => {
        try {
          const getReplyComment = await getNewsReplyCommentsAPI(id, commentId!);

          id && setReplyComment && setReplyComment(getReplyComment);
        } catch (error) {
          toast.error("مشکلی در دریافت رپلای های کامنت به وجود آمد !");
        }
      };

      fetchReplyComment();
    }, [id]);

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
        <div
          className="flex gap-1 items-center mt-2 cursor-pointer"
          onClick={handleAddLike}
        >
          <span className="commentLikeCount">{likeCount}</span>
          {currentUserLikeId ? (
            <RiHeart3Fill className="text-red" />
          ) : (
            <RiHeart3Line className="text-red" />
          )}
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

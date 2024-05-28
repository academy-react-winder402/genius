import { useEffect, useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { getCourseReplyCommentsAPI } from "../../../core/services/api/course/comments/get-course-reply-comments.api";

import { addCourseCommentLikeAPI } from "../../../core/services/api/course/comments/add-course-comment-like.api";
import { deleteCourseCommentLikeAPI } from "../../../core/services/api/course/comments/delete-course-comment-like.api";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { commentFormSchema } from "../../../core/validations/comment-form.validation";

import { CommentInterface } from "../../../types/comment";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CommentForm } from "../CommentForm";
import CommentSkeleton from "../CommentSkeleton";
import { toast } from "../toast";

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
  likeCount: number;
  currentUserLikeId: string;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
  courseId,
  commentId,
  likeCount,
  currentUserLikeId,
}: CommentItemProps) => {
  const [replyComment, setReplyComment] = useState<CommentInterface[]>();
  const [isReplyComment, setIsReplyComment] = useState(false);

  const darkMode = useDarkModeSelector();

  const handleAddLike = async () => {
    try {
      const likeComment = await toast.promise(
        addCourseCommentLikeAPI(commentId!),
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
        deleteCourseCommentLikeAPI(commentId!),
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

  const handleReplyCommentSubmit = (e: { title: string; describe: string }) => {
    console.log(e);
  };

  useEffect(() => {
    const fetchReplyComment = async () => {
      try {
        const getReplyComment = await getCourseReplyCommentsAPI(
          courseId,
          commentId!
        );

        setReplyComment(getReplyComment);
      } catch (error) {
        toast.error("مشکلی در دریافت رپلای های کامنت به وجود آمد !");
      }
    };

    fetchReplyComment();
  }, [courseId]);

  return (
    <>
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
          <div
            className="flex gap-1 mt-1 cursor-pointer"
            onClick={() => setIsReplyComment((prev) => !prev)}
          >
            <span className="commentAnswerText">
              {isReplyComment ? "انصراف" : "پاسخ"}
            </span>
            <img src={darkMode ? messagesDarkIcon : messagesIcon} />
          </div>
        </div>
        {isReplyComment && (
          <div className="w-full mt-4">
            <CommentForm
              onSubmit={handleReplyCommentSubmit}
              validationSchema={commentFormSchema}
            />
          </div>
        )}
      </div>
      {replyComment &&
        replyComment.map((reply) => {
          const {
            id,
            pictureAddress,
            insertDate,
            author,
            describe,
            likeCount,
            currentUserLikeId,
          } = reply;

          const formattedInsertDate = convertDateToPersian(insertDate);

          return (
            <>
              <CommentItem
                key={id}
                avatarImage={pictureAddress}
                createdAt={formattedInsertDate}
                name={author}
                message={describe}
                isChildren={true}
                likeCount={likeCount}
                commentId={id}
                currentUserLikeId={currentUserLikeId}
              />
            </>
          );
        })}
      {replyComment == undefined && <CommentSkeleton />}
    </>
  );
};

export { CommentItem };


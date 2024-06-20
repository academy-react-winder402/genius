import { useEffect, useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { useCommentLike } from "../../../hooks/news/comments/useCommentLike";
import { useDeleteCommentLikeNews } from "../../../hooks/news/comments/useDeleteCommentLikeNews";

import { getCourseReplyCommentsAPI } from "../../../core/services/api/course/comments/get-course-reply-comments.api";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { commentFormSchema } from "../../../core/validations/comment-form.validation";

import { NewsComment } from "../../../types/news-comment";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CommentForm } from "../CommentForm";
import CommentSkeleton from "../CommentSkeleton";
import { toast } from "../toast";

import messagesDarkIcon from "../../../assets/images/common/Comments/Icons/messages-dark.svg";
import messagesIcon from "../../../assets/images/common/Comments/Icons/messages.svg";
import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

interface CommentItemProps {
  avatarImage: string | null;
  name: string;
  createdAt: string;
  message: string;
  isChildren?: boolean;
  id?: string;
  commentId?: string;
  likeCount: number;
  currentUserLikeId: string;
  isLike: boolean;
}

const CommentItem = ({
  avatarImage,
  name,
  createdAt,
  message,
  isChildren,
  id,
  commentId,
  likeCount,
  currentUserLikeId,
  isLike,
}: CommentItemProps) => {
  const [replyComment, setReplyComment] = useState<NewsComment[]>();
  const [isReplyComment, setIsReplyComment] = useState(false);

  const darkMode = useDarkModeSelector();
  const addCommentLike = useCommentLike(true);
  const deleteCommentLike = useDeleteCommentLikeNews(id!);

  const handleCommentLike = async () => {
    isLike
      ? deleteCommentLike.mutate(currentUserLikeId!)
      : addCommentLike.mutate(commentId!);
  };

  const handleReplyCommentSubmit = (e: { title: string; describe: string }) => {
    console.log(e);
  };

  useEffect(() => {
    const fetchReplyComment = async () => {
      try {
        const getReplyComment = await getCourseReplyCommentsAPI(
          id!,
          commentId!
        );

        setReplyComment(getReplyComment);
      } catch (error) {
        toast.error("مشکلی در دریافت رپلای های کامنت به وجود آمد !");
      }
    };

    fetchReplyComment();
  }, [id]);

  return (
    <>
      <div className={isChildren ? "childrenComment" : ""}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={
                avatarImage &&
                avatarImage !== "undefined" &&
                avatarImage !== "Not-set" &&
                avatarImage !== "not-set" &&
                avatarImage !== "<string>"
                  ? avatarImage
                  : blankThumbnail
              }
              className="commentAvatarImage"
            />
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
            onClick={handleCommentLike}
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
            inserDate: insertDate,
            autor: author,
            describe,
            likeCount,
            currentUserLikeId,
            currentUserIsLike,
          } = reply;

          const formattedInsertDate = convertDateToPersian(insertDate);

          return (
            <CommentItem
              key={id}
              avatarImage={pictureAddress}
              createdAt={formattedInsertDate}
              name={author}
              message={describe}
              isChildren={true}
              likeCount={+likeCount}
              commentId={id}
              currentUserLikeId={currentUserLikeId}
              isLike={currentUserIsLike}
            />
          );
        })}
      {replyComment == undefined && <CommentSkeleton />}
    </>
  );
};

export { CommentItem };

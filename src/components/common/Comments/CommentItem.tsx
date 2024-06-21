import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { useAddNewsReplyComment } from "../../../hooks/news/comments/useAddNewsReplyComment";
import { useCommentLike } from "../../../hooks/news/comments/useCommentLike";
import { useDeleteCommentLikeNews } from "../../../hooks/news/comments/useDeleteCommentLikeNews";
import { useNewsReplyComments } from "../../../hooks/news/comments/useNewsReplyComments";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { commentFormSchema } from "../../../core/validations/comment-form.validation";

import { useDarkModeSelector } from "../../../redux/darkMode";

import { CommentForm } from "../CommentForm";
import CommentSkeleton from "../CommentSkeleton";

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
  parentId: string;
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
  parentId,
  commentId,
  likeCount,
  currentUserLikeId,
  isLike,
}: CommentItemProps) => {
  const [showReplyComments, setShowReplyComments] = useState(false);
  const [isReplyComment, setIsReplyComment] = useState(false);

  const darkMode = useDarkModeSelector();
  const addCommentLike = useCommentLike(true);
  const deleteCommentLike = useDeleteCommentLikeNews(id!);
  const addReplyComment = useAddNewsReplyComment();
  const { data: replyComments, isLoading: isReplyCommentsLoading } =
    useNewsReplyComments(commentId!);

  const handleCommentLike = async () => {
    console.log(currentUserLikeId, isLike);
    isLike
      ? deleteCommentLike.mutate(currentUserLikeId!)
      : addCommentLike.mutate(commentId!);
  };

  const handleReplyCommentSubmit = (e: { title: string; describe: string }) => {
    addReplyComment.mutate({
      newsId: id!,
      title: e.title,
      describe: e.describe,
      parentId,
    });

    e.title = "";
    e.describe = "";
  };

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
          <div>
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
            {isLike ? (
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
          <div
            className="flex gap-1 mt-1 cursor-pointer"
            onClick={() => setShowReplyComments(!showReplyComments)}
          >
            <span className="commentAnswerText">
              {showReplyComments ? "پنهان پاسخ ها" : "پاسخ ها"}
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
        {showReplyComments && (
          <div className="flex flex-col gap-9 mt-5">
            {isReplyCommentsLoading && <CommentSkeleton />}
            {!isReplyCommentsLoading &&
            replyComments &&
            replyComments.length === 0 ? (
              <span className="text-center text-sm text-text1 dark:text-darkText">
                پاسخی برای این نظر پیدا نشد !
              </span>
            ) : (
              replyComments!.map((reply) => {
                const {
                  id,
                  newsId,
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
                    id={newsId}
                    avatarImage={pictureAddress}
                    createdAt={formattedInsertDate}
                    name={author}
                    message={describe}
                    isChildren={true}
                    likeCount={+likeCount}
                    commentId={id}
                    currentUserLikeId={currentUserLikeId}
                    parentId={id}
                    isLike={currentUserIsLike}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { CommentItem };

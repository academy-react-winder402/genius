import { useEffect, useState } from "react";

import { getNewsCommentsAPI } from "../../../core/services/api/news/comments/get-news-comments.api";

import { CommentInterface } from "../../../types/comment";

import { CommentItem } from "./CommentsItem";
import { toast } from "../toast";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

interface CommentsProps {
  Id: string;
}

const Comments = ({ Id }: CommentsProps) => {
  const [comments, setComments] = useState<CommentInterface[]>();
  const [replyComment, setReplyComment] = useState<CommentInterface[]>();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const getComments = await getNewsCommentsAPI(Id);

        setComments(getComments);
      } catch (error) {
        toast.error("مشکلی در دریافت نظرات به وجود آمد !");
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="mt-7 flex flex-col gap-7">
      {comments &&
        comments.map((comment) => {
          const {
            id,
            pictureAddress,
            insertDate,
            author,
            describe,
            likeCount,
            currentUserLikeId,
          } = comment;

          const formattedInsertDate = convertDateToPersian(insertDate);

          return (
            <>
              <CommentItem
                key={id}
                avatarImage={pictureAddress}
                createdAt={formattedInsertDate}
                name={author}
                message={describe}
                isChildren={false}
                Id={Id}
                commentId={id}
                setReplyComment={setReplyComment}
                likeCount={likeCount}
                currentUserLikeId={currentUserLikeId}
              />
              {replyComment &&
                replyComment?.map((reply) => {
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
                  );
                })}
            </>
          );
        })}
    </div>
  );
};

export { Comments };

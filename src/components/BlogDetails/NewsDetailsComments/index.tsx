import { useState } from "react";

import { CommentInterface } from "../../../types/comment";

import { CommentItem } from "./CommentsItem";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";
import { useNewsComments } from "../../../hooks/news/comments/useNewsComments";
import { toast } from "react-toastify";

interface CommentsProps {
  id: string;
}

const NewsComments = ({ id }: CommentsProps) => {
  const [replyComment, setReplyComment] = useState<CommentInterface[]>();

  const { data, error } = useNewsComments(id);

  if (error) toast.error("مشکلی در دریافت نظرات خبر به وجود آمد!");

  return (
    <div className="mt-7 flex flex-col gap-7">
      {data &&
        data.map((comment) => {
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
                id={id}
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

export { NewsComments };

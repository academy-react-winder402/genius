import { useEffect, useState } from "react";

import { getCourseCommentsAPI } from "../../../core/services/api/course/comments/get-course-comments.api";

import { CommentInterface } from "../../../types/comment";

import { CommentItem } from "./CommentItem";
import { toast } from "../toast";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

interface CommentsProps {
  courseId: string;
}

const Comments = ({ courseId }: CommentsProps) => {
  const [comments, setComments] = useState<CommentInterface[]>();
  const [replyComment, setReplyComment] = useState<CommentInterface[]>();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const getComments = await getCourseCommentsAPI(courseId);

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
          const { id, pictureAddress, insertDate, author, describe } = comment;

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
                courseId={courseId}
                commentId={id}
                setReplyComment={setReplyComment}
              />
              {replyComment &&
                replyComment?.map((reply) => {
                  const { id, pictureAddress, insertDate, author, describe } =
                    reply;

                  const formattedInsertDate = convertDateToPersian(insertDate);

                  return (
                    <CommentItem
                      key={id}
                      avatarImage={pictureAddress}
                      createdAt={formattedInsertDate}
                      name={author}
                      message={describe}
                      isChildren={true}
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

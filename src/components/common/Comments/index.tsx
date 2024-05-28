import { useEffect, useState } from "react";

import { getCourseCommentsAPI } from "../../../core/services/api/course/comments/get-course-comments.api";

import { CommentInterface } from "../../../types/comment";

import { toast } from "../toast";
import { PaginatedComments } from "./PaginatedComments";

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
      <PaginatedComments
        comments={comments}
        courseId={courseId}
        itemsPerPage={5}
      />
    </div>
  );
};

export { Comments };

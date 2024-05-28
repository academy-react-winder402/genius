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
    <PaginatedComments
      comments={comments}
      courseId={courseId}
      itemsPerPage={5}
    />
  );
};

export { Comments };

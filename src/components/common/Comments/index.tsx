import { toast } from "../toast";

import { useNewsComments } from "../../../hooks/news/comments/useNewsComments";

import { PaginatedComments } from "./PaginatedComments";

interface CommentsProps {
  courseId?: string;
  newsId?: string;
}

const Comments = ({ courseId, newsId }: CommentsProps) => {
  const { data, error } = useNewsComments(newsId!);

  if (error) toast.error("مشکلی در دریافت نظرات خبر به وجود آمد !");

  return (
    <PaginatedComments
      comments={data}
      id={courseId || newsId!}
      itemsPerPage={5}
    />
  );
};

export { Comments };

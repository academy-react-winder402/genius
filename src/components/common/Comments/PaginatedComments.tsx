import { useState } from "react";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { CommentInterface } from "../../../types/comment";

import CommentSkeleton from "../CommentSkeleton";
import { Pagination } from "../Pagination";
import { CommentItem } from "./CommentItem";

interface PaginatedCommentsProps {
  comments: CommentInterface[] | undefined;
  itemsPerPage: number;
  courseId: string;
}

const PaginatedComments = ({
  comments,
  itemsPerPage,
  courseId,
}: PaginatedCommentsProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: CommentInterface[] | undefined =
    comments && (comments.slice(itemOffset, endOffset) as CommentInterface[]);
  const pageCount: number | undefined =
    comments && Math.ceil(comments?.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset =
      comments && (event.selected * itemsPerPage) % comments?.length;

    setItemOffset(newOffset!);
  };

  const commentSkeletonsArray = [1, 2, 3, 4];

  return (
    <>
      <div className="commentsWrapper">
        {currentItems && currentItems !== undefined ? (
          currentItems.map((comment) => {
            const {
              id: commentId,
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
                  key={commentId}
                  avatarImage={pictureAddress}
                  createdAt={formattedInsertDate}
                  name={author}
                  message={describe}
                  isChildren={false}
                  courseId={courseId}
                  commentId={commentId}
                  likeCount={likeCount}
                  currentUserLikeId={currentUserLikeId}
                />
              </>
            );
          })
        ) : (
          <div className="commentsWrapper">
            {commentSkeletonsArray.map((item) => (
              <CommentSkeleton key={`reply-comment-skeleton-${item}`} />
            ))}
          </div>
        )}
      </div>
      {comments && comments?.length > itemsPerPage && (
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount!} />
      )}
    </>
  );
};

export { PaginatedComments };


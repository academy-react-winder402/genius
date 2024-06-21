import { useState } from "react";

import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

import { NewsComment } from "../../../types/news-comment";

import CommentSkeleton from "../CommentSkeleton";
import { Pagination } from "../Pagination";
import { CommentItem } from "./CommentItem";

interface PaginatedCommentsProps {
  comments: NewsComment[] | undefined;
  itemsPerPage: number;
  id: string;
}

const PaginatedComments = ({
  comments,
  itemsPerPage,
  id,
}: PaginatedCommentsProps) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems: NewsComment[] | undefined =
    comments && (comments.slice(itemOffset, endOffset) as NewsComment[]);
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
              inserDate: insertDate,
              autor: author,
              describe,
              likeCount,
              currentUserLikeId,
              currentUserIsLike,
            } = comment;

            const formattedInsertDate = convertDateToPersian(insertDate);

            return (
              <CommentItem
                key={commentId}
                avatarImage={pictureAddress}
                createdAt={formattedInsertDate}
                name={author}
                message={describe}
                isChildren={false}
                id={id}
                parentId={commentId}
                commentId={commentId}
                likeCount={+likeCount}
                currentUserLikeId={currentUserLikeId}
                isLike={currentUserIsLike}
              />
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

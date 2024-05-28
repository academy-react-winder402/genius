import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { CommentInterface } from "../../../types/comment";

import { Pagination } from "../Pagination";
import { CommentItem } from "./CommentItem";
import { convertDateToPersian } from "../../../core/utils/date-helper.utils";

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

  return (
    <>
      <div className="flex flex-col gap-7">
        {currentItems ? (
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
          <>
            <div></div>
          </>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount!} />
    </>
  );
};

export { PaginatedComments };

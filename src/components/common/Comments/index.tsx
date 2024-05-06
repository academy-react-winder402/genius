import { commentItems } from "../../../core/data/comments/comment-items";

import { CommentItem } from "./CommentItem";

const Comments = () => {
  return (
    <div className="mt-7 flex flex-col gap-7">
      {commentItems.map((comment) => (
        <>
          <CommentItem
            key={comment.id}
            avatarImage={comment.image}
            createdAt={comment.createdAt}
            name={comment.title}
            message={comment.message}
            isChildren={comment.isChildren}
          />
          {comment.children?.map((childMessage) => (
            <CommentItem
              key={childMessage.id}
              avatarImage={childMessage.image}
              createdAt={childMessage.createdAt}
              name={childMessage.title}
              message={childMessage.message}
              isChildren={childMessage.isChildren}
            />
          ))}
        </>
      ))}
      <span className="showMoreComments">مشاهده 12 نظر دیگر</span>
    </div>
  );
};

export { Comments };

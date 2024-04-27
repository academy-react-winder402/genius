import { courseDetailsComments } from "./course-details-comments";

import { CourseDetailsCommentItem } from "./CourseDetailsCommentItem";

const CourseDetailComments = () => {
  return (
    <div className="mt-7 flex flex-col gap-7">
      {courseDetailsComments.map((comment) => (
        <>
          <CourseDetailsCommentItem
            key={comment.id}
            avatarImage={comment.image}
            createdAt={comment.createdAt}
            name={comment.title}
            message={comment.message}
            isChildren={comment.isChildren}
          />
          {comment.children?.map((childMessage) => (
            <CourseDetailsCommentItem
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
      <span className="font-[500] text-[14px] text-center text-primaryColor cursor-pointer mb-2">مشاهده 12 نظر دیگر</span>
    </div>
  );
};

export { CourseDetailComments };

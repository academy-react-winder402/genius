const CourseDetailsAddComment = () => {
  return (
    <div className="flex gap-4 flex-col items-center">
      <div className="w-full">
        <textarea
          placeholder="نظر خودتو بنویس..."
          className="courseDetailsAddCommentTextarea"
        />
      </div>
      <button className="mainButton w-[84px] h-[48px]">ارسال</button>
    </div>
  );
};

export { CourseDetailsAddComment };

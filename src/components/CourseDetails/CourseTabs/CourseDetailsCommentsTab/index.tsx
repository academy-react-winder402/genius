import { addCommentCourseAPI } from "../../../../core/services/api/course/comments/add-comment-course.api";
import { onFormData } from "../../../../core/utils/form-data-helper.utils";
import { addCommentFormSchema } from "../../../../core/validations/add-comment-form.validation";

import { AddComment } from "../../../common/AddComment";
import { Comments } from "../../../common/Comments";
import { CustomTabPanel } from "../../../common/CustomTabPanel";
import { toast } from "../../../common/toast";

interface CourseDetailsCommentsTabProps {
  value: number;
  courseId: string;
}

const CourseDetailsCommentsTab = ({
  value,
  courseId,
}: CourseDetailsCommentsTabProps) => {
  const onSubmit = async (e: { title: string; describe: string }) => {
    try {
      const { title, describe } = e;

      const formData = onFormData({
        courseId,
        title,
        describe,
      });

      const sendComment = await toast.promise(addCommentCourseAPI(formData), {
        pending: "در حال ارسال نظر ...",
      });

      if (sendComment.success) toast.success("نظر شما با موفقیت ثبت شد !");
      else toast.error("مشکلی در ارسال نظر به وجود آمد !");
    } catch (error) {
      toast.error("مشکلی در ارسال نظر به وجود آمد !");
    }
  };

  return (
    <CustomTabPanel value={value} index={2}>
      <div className="mt-3">
        <AddComment
          onSubmit={onSubmit}
          validationSchema={addCommentFormSchema}
        />
        <Comments courseId={courseId} />
      </div>
    </CustomTabPanel>
  );
};

export { CourseDetailsCommentsTab };

import { addCommentNewsAPI } from "../../../core/services/api/news/comments/add-comment-news.api";
import { onFormData } from "../../../core/utils/form-data-helper.utils";
import { addCommentFormSchema } from "../../../core/validations/add-comment.-formvalidation";
import { AddComment } from "../../common/AddComment";
import { Comments } from "../../common/Comments";
import { toast } from "../../common/toast";

interface NewsDetailsCommentsTabProps {
  value: number;
  Id: string;
}

const NewsDetailsComments = ({ value, Id }: NewsDetailsCommentsTabProps) => {
  const onSubmit = async (e: { describe: string }) => {
    try {
      const formData = onFormData({
        Id,
        title: e.describe,
        describe,
      });

      const sendComment = await toast.promise(addCommentNewsAPI(formData), {
        pending: "در حال ارسال نظر ...",
      });

      if (sendComment.success) toast.success("نظر شما با موفقیت ثبت شد !");
      else toast.error("مشکلی در ارسال نظر به وجود آمد !");
    } catch (error) {
      toast.error("مشکلی در ارسال نظر به وجود آمد !");
    }
  };

  return (
    <div className="mt-3">
      <AddComment onSubmit={onSubmit} validationSchema={addCommentFormSchema} />
      <Comments Id={Id} />
    </div>
  );
};

export { NewsDetailsComments };

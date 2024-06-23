import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useAddReplyCourseComment = (commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addCourseReplyComment"],
    mutationFn: async (comment: FormData) =>
      await http
        .post("/Course/AddReplyCourseComment", comment)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت ریپلای نظر شما ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("ریپلای شما با موفقیت ثبت شد !");
      else toast.error("مشکلی در ثبت ریپلای شما به وجود آمد!");

      queryClient.invalidateQueries({
        queryKey: ["courseComments", commentId],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت ریپلای شما به وجود آمد!");
    },
  });
};

export { useAddReplyCourseComment };

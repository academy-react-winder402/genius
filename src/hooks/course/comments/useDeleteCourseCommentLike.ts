import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useDeleteCourseCommentLike = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCommentLikeNews"],
    mutationFn: async (courseCommentId: string) =>
      await http
        .delete("/Course/DeleteCourseCommentLike", {
          params: {
            courseCommandId: courseCommentId,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال حذف لایک نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("لایک نظر با موفقیت حذف شد !");
      else
        data.ErrorMessage.map((errorMessage: string) =>
          toast.error(errorMessage)
        );

      queryClient.invalidateQueries({
        queryKey: ["courseComments", courseId],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در حذف لایک نظر به وجود آمد !");
    },
  });
};

export { useDeleteCourseCommentLike };

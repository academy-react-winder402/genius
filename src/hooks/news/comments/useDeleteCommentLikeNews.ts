import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useDeleteCommentLikeNews = (newsId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCommentLikeNews"],
    mutationFn: async (deleteEntityId: string) =>
      await http
        .delete("/News/DeleteCommentLikeNews", {
          data: {
            deleteEntityId,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال حذف لایک نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("لایک نظر با موفقیت حذغ شد !");
      else
        data.ErrorMessage.map((errorMessage: string) =>
          toast.error(errorMessage)
        );

      queryClient.invalidateQueries({
        queryKey: ["newsComments", newsId],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در حذف لایک نظر به وجود آمد !");
    },
  });
};

export { useDeleteCommentLikeNews };

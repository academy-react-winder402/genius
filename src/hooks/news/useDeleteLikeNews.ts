import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useDeleteLikeNews = (newsId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-news-like"],
    mutationFn: async (deleteEntityId: string) =>
      await http
        .delete("/News/DeleteLikeNews", {
          data: { deleteEntityId },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال حذف لایک خبر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) {
        toast.success("لایک خبر با موفقیت حذف شد !");
      } else {
        toast.error(data.ErrorMessage);
      }
      queryClient.invalidateQueries({
        queryKey: ["newsDetails", newsId],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در حذف لایک خبر به وجود آمد !");
    },
  });
};

export { useDeleteLikeNews };

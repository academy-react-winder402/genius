import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useCommentLike = (likeType: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["commentLike"],
    mutationFn: async (commentId: string) =>
      await http
        .post(`/News/CommentLike/${commentId}`, undefined, {
          params: {
            likeType,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال لایک نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("نظر با موفقیت لایک شد !");
      else toast.error(data.ErrorMessage);

      queryClient.invalidateQueries({
        queryKey: ["newsComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در لایک نظر به وجود آمد !");
    },
  });
};

export { useCommentLike };

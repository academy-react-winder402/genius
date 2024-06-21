import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

import { AddNewsReplyComment } from "../../../types/add-news-reply-comment";

const useAddNewsReplyComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addNewsReplyComment"],
    mutationFn: async (comment: AddNewsReplyComment) =>
      await http
        .post("/News/CreateNewsReplyComment", comment)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت ریپلای نظر شما ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("ریپلای شما با موفقیت ثبت شد !");
      else toast.error("مشکلی در ثبت ریپلای شما به وجود آمد!");

      queryClient.invalidateQueries({
        queryKey: ["newsDetails"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت ریپلای شما به وجود آمد!");
    },
  });
};

export { useAddNewsReplyComment };

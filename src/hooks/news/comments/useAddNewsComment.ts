import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

import { AddNewsComment } from "../../../types/add-news-comment";

const useAddNewsComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addNewsComment"],
    mutationFn: async (comment: AddNewsComment) =>
      await http
        .post("/News/CreateNewsComment", comment)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("نظر شما با موفقیت ثبت شد !");
      else toast.error(data.errorMessage);

      queryClient.invalidateQueries({
        queryKey: ["newsComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت نظر شما به وجود آمد !");
    },
  });
};

export { useAddNewsComment };

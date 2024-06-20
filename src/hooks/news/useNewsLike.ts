import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useNewsLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsLike"],
    mutationFn: async (newsId: string) =>
      await http.post(`/News/NewsLike/${newsId}`).then((res) => res.data),
    onMutate: () => toast.loading("در حال لایک خبر ..."),
    onSuccess: (data, newNews) => {
      toast.dismiss();
      if (data.success) {
        toast.success("خبر با موفقیت لایک شد");
        queryClient.invalidateQueries({
          queryKey: ["newsDetails", newNews],
        });
      } else {
        toast.error("مشکلی در لایک خبر به وجود آمد !");
      }
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در لایک خبر به وجود آمد !");
    },
  });
};

export { useNewsLike };

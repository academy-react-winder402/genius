import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useNewsDislike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsDislike"],
    mutationFn: async (newsId: string) =>
      await http.post(`/News/NewsDissLike/${newsId}`).then((res) => res.data),
    onMutate: () => toast.loading("در حال دیس لایک لایک خبر ..."),
    onSuccess: (data, newNews) => {
      toast.dismiss();
      if (data.success) {
        toast.success("خبر با موفقیت دیس لایک شد !");
      } else {
        toast.error(data.ErrorMessage);
      }
      queryClient.invalidateQueries({
        queryKey: ["newsDetails", newNews],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در دیس لایک خبر به وجود آمد !");
    },
  });
};

export { useNewsDislike };

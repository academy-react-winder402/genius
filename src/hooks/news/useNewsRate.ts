import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

import { NewsRateInterface } from "../../types/news-rate";

const useNewsRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["newsRate"],
    mutationFn: async (params: NewsRateInterface) =>
      await http
        .post("/News/NewsRate", undefined, {
          params,
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت امتیاز ..."),
    onSuccess: (data) => {
      if (data.success) {
        toast.dismiss();
        toast.success("امتباز شما با موفقیت ثبت شد !");
      } else {
        toast.error(data.message);
      }

      queryClient.invalidateQueries({
        queryKey: ["newsDetails"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت امتیاز شما به وجود آمد !");
    },
  });
};

export { useNewsRate };

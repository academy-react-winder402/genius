import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useDeleteCourseLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourseLike"],
    mutationFn: async (courseLikeId: string) =>
      await http
        .delete("/Course/DeleteCourseLike", {
          data: { courseLikeId },
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      toast.error("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
    },
  });
};

export { useDeleteCourseLike };

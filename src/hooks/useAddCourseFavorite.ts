import { useMutation, useQueryClient } from "@tanstack/react-query";

import http from "../core/services/interceptor";
import { toast } from "react-toastify";

const useAddCourseFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["favorite"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseFavorite", { courseId })
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });

      toast.success("دوره با موفقیت به لیست علاقه مندی های شما اضافه شد !");
    },
    onError: () => {
      toast.success(
        "مشکلی در افزودن دوره به لیست علاقه مندی های شما به وجود آمد !"
      );
    },
  });
};

export default useAddCourseFavorite;

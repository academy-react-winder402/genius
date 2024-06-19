import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useAddCourseFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["favorite-course"],
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
      toast.error(
        "مشکلی در افزودن دوره به لیست علاقه مندی های شما به وجود آمد !"
      );
    },
  });
};

export { useAddCourseFavorite };

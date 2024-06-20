import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useLikeCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["likeCourse"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseLike", undefined, {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال لایک دوره ..."),
    onSuccess: (data, courseId) => {
      toast.dismiss();
      if (data.success) {
        toast.success("دوره با موفقیت لایک شد");
      } else {
        console.log(data);
        toast.error(data.ErrorMessage);
      }

      queryClient.invalidateQueries({
        queryKey: ["courseDetails", courseId],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در لایک دوره به وجود آمد !");
    },
  });
};

export { useLikeCourse };

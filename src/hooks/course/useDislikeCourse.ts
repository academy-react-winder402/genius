import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useDislikeCourse = () => {
  return useMutation({
    mutationKey: ["dislikeCourse"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/Course/AddCourseDissLike", undefined, {
          params: {
            courseId,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال دیس لایک دوره ..."),
    onSuccess: () => {
      toast.dismiss();
      toast.success("دوره با موفقیت دیس لایک شد");
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در دیس لایک دوره به وجود آمد !");
    },
  });
};

export { useDislikeCourse };

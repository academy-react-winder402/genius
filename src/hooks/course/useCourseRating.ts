import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useCourseRating = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["courseRating"],
    mutationFn: async (params: { courseId: string; rateNumber: number }) =>
      await http
        .post("/Course/SetCourseRating", undefined, {
          params,
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت امتیاز ..."),
    onSuccess: (data, courseId) => {
      toast.dismiss();
      if (data.success) {
        toast.success("امتیاز شما با موفقیت ثبت شد !");
      } else {
        console.log(data);
        toast.error(data.ErrorMessage);
      }

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت امتیاز شما به وجود آمد !");
    },
  });
};

export { useCourseRating };

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useCourseCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["commentLike"],
    mutationFn: async (courseCommentId: string) =>
      await http
        .post(`/Course/AddCourseCommentLike`, undefined, {
          params: {
            courseCommandId: courseCommentId,
          },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال لایک نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("نظر با موفقیت لایک شد !");
      else toast.error(data.ErrorMessage);

      queryClient.invalidateQueries({
        queryKey: ["courseComments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseReplyComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در لایک نظر به وجود آمد !");
    },
  });
};

export { useCourseCommentLike };

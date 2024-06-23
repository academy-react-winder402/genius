import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useAddCourseComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addCourseComment"],
    mutationFn: async (comment: FormData) =>
      await http
        .post("/Course/AddCommentCourse", comment)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت نظر ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("نظر شما با موفقیت ثبت شد !");
      else toast.error(data.errorMessage);

      queryClient.invalidateQueries({
        queryKey: ["courseComments"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در ثبت نظر شما به وجود آمد !");
    },
  });
};

export { useAddCourseComment };

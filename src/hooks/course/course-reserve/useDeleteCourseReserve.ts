import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../../core/services/interceptor";

const useDeleteCourseReserve = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourseReserve"],
    mutationFn: async (id: string) =>
      await http
        .delete("/CourseReserve", {
          data: { id },
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال حذف رزرو ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) toast.success("رزرو دوره با موفقیت حذف شد !");
      else toast.error("مشکلی در حذف رزرو به وجود آمد !");

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در حذف رزرو به وجود آمد !");
    },
  });
};

export { useDeleteCourseReserve };

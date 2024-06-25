import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useSelectProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["selectProfileImage"],
    mutationFn: async (imageId: FormData) =>
      await http
        .post("/SharePanel/SelectProfileImage", imageId)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال افزودن عکس ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) {
        toast.success("عکس با موفقیت انتخاب انتخاب شد !");
      } else {
        toast.error(data.ErrorMessage);
      }
      queryClient.invalidateQueries({
        queryKey: ["profileInfo"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در انتخاب عکس به وجود آمد !");
    },
  });
};

export { useSelectProfileImage };

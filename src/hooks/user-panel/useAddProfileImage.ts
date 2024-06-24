import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useAddProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addProfileImage"],
    mutationFn: async (formFile: FormData) =>
      await http
        .post("/SharePanel/AddProfileImage", formFile)
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال افزودن عکس ..."),
    onSuccess: (data) => {
      toast.dismiss();
      if (data.success) {
        toast.success("عکس با موفقیت اضافه شد !");
      } else {
        toast.error(data.ErrorMessage);
      }

      queryClient.invalidateQueries({
        queryKey: ["profileInfo"],
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("مشکلی در آپلود عکس به وجود آمد !");
    },
  });
};

export { useAddProfileImage };

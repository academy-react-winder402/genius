import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

import { EditSecurityInfo } from "../../types/edit-security-info";

const useEditSecurityInfo = () => {
  return useMutation({
    mutationKey: ["editSecurityInfo"],
    mutationFn: async (data: EditSecurityInfo) =>
      await http.put("/SharePanel/EditSecurity", data).then((res) => res.data),
    onMutate: () =>
      toast.loading("در حال ویرایش اطلاعات امنیتی شما ...", {
        toastId: "editSecurityInfoLoadingToast",
      }),
    onSuccess: () => {
      toast.dismiss("editSecurityInfoLoadingToast");
      toast.success("اطلاعات امنیتی شما با موفقیت ویرایش شد !");
    },
    onError: () => {
      toast.dismiss("editSecurityInfoLoadingToast");
      toast.error("مشکلی در ویرایش اطلاعات امنیتی شما به وجود آمد !");
    },
  });
};

export { useEditSecurityInfo };

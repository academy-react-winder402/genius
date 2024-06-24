import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useIsUserLogin } from "../../../redux/user-login";

import http from "../../../core/services/interceptor";

const useCourseReserve = () => {
  const queryClient = useQueryClient();
  const isUserLogin = useIsUserLogin();

  console.log(isUserLogin);

  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["courseReserve"],
    mutationFn: async (courseId: string) =>
      await http
        .post("/CourseReserve/ReserveAdd", {
          courseId,
        })
        .then((res) => res.data),
    onMutate: () => toast.loading("در حال ثبت رزرو ..."),
    onSuccess: (data) => {
      toast.dismiss();

      if (data.success) toast.success("دوره با موفقیت رزرو شد !");
      else toast.error("مشکلی در ثبت رزرو به وجود آمد !");

      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      toast.dismiss();
      if (!isUserLogin) {
        toast.error("برای رزرو دوره باید وارد سایت شوید !");

        navigate("/login");
      } else {
        toast.error("مشکلی در ثبت رزرو به وجود آمد !");
      }
    },
  });
};

export { useCourseReserve };

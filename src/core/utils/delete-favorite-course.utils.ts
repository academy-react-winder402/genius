import { Dispatch, SetStateAction } from "react";

import { deleteCourseFavoriteAPI } from "../services/api/course/delete-course-favorite.api";

import { toast } from "../../components/common/toast";

export const deleteFavoriteCourse = async (
  courseFavoriteCourseId: string,
  setIsUserFavorite: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const deleteFavoriteCourse = await toast.promise(
      deleteCourseFavoriteAPI(courseFavoriteCourseId),
      { pending: "در حال حذف دوره از علاقه مندی های شما ..." }
    );

    if (deleteFavoriteCourse.success) {
      toast.success("دوره با موفقیت از علاقه مندی های شما حذف شد");
      setIsUserFavorite(true);
    }
  } catch (error) {
    toast.error("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
  }
};

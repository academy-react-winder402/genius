import { Dispatch, SetStateAction } from "react";

import { addCourseFavoriteAPI } from "../services/api/course/add-course-favorite.api";

import { toast } from "../../components/common/toast";

export const addFavoriteCourse = async (
  courseId: string,
  setIsUserFavorite: Dispatch<SetStateAction<boolean>>
) => {
  const addCourseFavorite = await toast.promise(
    addCourseFavoriteAPI(courseId),
    { pending: "در حال افزودن دوره به علاقه مندی های شما" }
  );

  if (addCourseFavorite.success) {
    toast.success("دوره با  موفقیت به علاقه مندی های شما اضافه شد !");
    setIsUserFavorite(true);
  } else toast.error(addCourseFavorite.message);
};

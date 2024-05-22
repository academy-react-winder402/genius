import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { addCourseFavoriteAPI } from "../../../core/services/api/course/add-course-favorite.api";

import { toast } from "../toast";
import { deleteCourseFavoriteAPI } from "../../../core/services/api/course/delete-course-favorite.api";
import { useState } from "react";

interface CourseLikeBoxProps {
  courseId: string;
  isUserFavorite: boolean;
  courseFavoriteCourseId: string;
  classes?: string;
}

const CourseLikeBox = ({
  courseId,
  isUserFavorite,
  courseFavoriteCourseId,
  classes,
}: CourseLikeBoxProps) => {
  const [isCourseFavorite, setIsUserFavorite] =
    useState<boolean>(isUserFavorite);

  const handleAddFavoriteCourse = async () => {
    const addCourseFavorite = await toast.promise(
      addCourseFavoriteAPI(courseId),
      { pending: "در حال افزودن دوره به علاقه مندی های شما" }
    );

    if (addCourseFavorite.success) {
      toast.success("دوره با  موفقیت به علاقه مندی های شما اضافه شد !");
      setIsUserFavorite(true);
    } else toast.error(addCourseFavorite.message);
  };

  const handleDeleteFavoriteCourseClick = async () => {
    try {
      const deleteFavoriteCourse = await toast.promise(
        deleteCourseFavoriteAPI(courseFavoriteCourseId),
        { pending: "در حال حذف دوره از علاقه مندی های شما ..." }
      );

      if (deleteFavoriteCourse.success) {
        toast.success("دوره با موفقیت از علاقه مندی های شما حذف شد");
        setIsUserFavorite(false);
      } else toast.error(deleteFavoriteCourse.message);
    } catch (error) {
      toast.error("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
    }
  };

  return (
    <div
      className={`courseLikeBox ${classes}`}
      onClick={
        isCourseFavorite
          ? handleDeleteFavoriteCourseClick
          : handleAddFavoriteCourse
      }
    >
      {isCourseFavorite ? <RiHeart3Fill /> : <RiHeart3Line />}
    </div>
  );
};
export { CourseLikeBox };

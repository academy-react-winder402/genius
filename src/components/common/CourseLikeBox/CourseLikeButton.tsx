import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { addFavoriteCourse } from "../../../core/utils/add-favorite-course.utils";
import { deleteFavoriteCourse } from "../../../core/utils/delete-favorite-course.utils";

interface CourseLikeButtonProps {
  classes?: string;
  isCourseFavorite: boolean;
  courseFavoriteCourseId: string;
  courseId: string;
}

const CourseLikeButton = ({
  classes,
  courseFavoriteCourseId,
  courseId,
  isCourseFavorite,
}: CourseLikeButtonProps) => {
  const [isUserFavorite, setIsUserFavorite] = useState(false);

  const handleCourseLikeBox = () => {
    !isUserFavorite
      ? isCourseFavorite
        ? deleteFavoriteCourse(courseFavoriteCourseId, setIsUserFavorite)
        : addFavoriteCourse(courseId, setIsUserFavorite)
      : isCourseFavorite
      ? addFavoriteCourse(courseId, setIsUserFavorite)
      : deleteFavoriteCourse(courseFavoriteCourseId, setIsUserFavorite);
  };

  return (
    <div className={`courseLikeBox ${classes}`} onClick={handleCourseLikeBox}>
      {!isUserFavorite ? (
        isCourseFavorite ? (
          <RiHeart3Fill />
        ) : (
          <RiHeart3Line />
        )
      ) : isCourseFavorite ? (
        <RiHeart3Line />
      ) : (
        <RiHeart3Fill />
      )}
    </div>
  );
};

export { CourseLikeButton };

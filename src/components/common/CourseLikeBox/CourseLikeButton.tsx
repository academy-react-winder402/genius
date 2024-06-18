import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import useAddCourseFavorite from "../../../hooks/useAddCourseFavorite";

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

  const addCourseFavorite = useAddCourseFavorite();

  const handleCourseLikeBox = () => {
    addCourseFavorite.mutate(courseId);
  };

  return (
    <div className={`courseLikeBox ${classes}`} onClick={handleCourseLikeBox}>
      {isCourseFavorite ? <RiHeart3Fill /> : <RiHeart3Line />}
    </div>
  );
};

export { CourseLikeButton };

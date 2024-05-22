import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

import { addCourseFavoriteAPI } from "../../../core/services/api/course/add-course-favorite.api";

import { toast } from "../toast";

interface CourseLikeBoxProps {
  courseId: string;
  isUserFavorite: boolean;
  classes?: string;
}

const CourseLikeBox = ({
  courseId,
  isUserFavorite,
  classes,
}: CourseLikeBoxProps) => {
  const handleCourseLikeBoxClick = async () => {
    const addCourseFavorite = await toast.promise(
      addCourseFavoriteAPI(courseId),
      { pending: "در حال افزودن دوره به علاقه مندی های شما" }
    );

    if (addCourseFavorite.success) {
      toast.success("دوره با  موفقیت به علاقه مندی های شما اضافه شد !");
    } else toast.error(addCourseFavorite.message);
  };

  return (
    <div
      className={`courseLikeBox ${classes}`}
      onClick={handleCourseLikeBoxClick}
    >
      {isUserFavorite ? <RiHeart3Line /> : <RiHeart3Fill />}
    </div>
  );
};
export { CourseLikeBox };

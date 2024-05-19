import { Skeleton } from "../Skeleton";

import blankThumbnail from "../../../assets/images/Courses/blank-thumbnail.jpg";

const CourseItemSkeleton = () => {
  return (
    <div className="courseItemS2">
      <img src={blankThumbnail} className="courseItemImage" />
      <Skeleton width="80%" height="15px" className="mt-5 mb-5 mr-1" />
      <Skeleton width="95%" height="10px" className="mr-1" count={5} />
    </div>
  );
};

export { CourseItemSkeleton };

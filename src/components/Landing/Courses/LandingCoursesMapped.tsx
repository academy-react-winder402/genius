import { toast } from "react-toastify";

import { useCourseTop } from "../../../hooks/course/useCourseTop";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";

const LandingCoursesMapped = () => {
  const { data, isLoading, isError } = useCourseTop(4);

  if (isError) toast.error("مشکلی در دریافت دوره های برتر به وجود آمد !");

  return (
    <>
      <div className="landingCoursesMappedWrapper">
        {isLoading ? (
          <>
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
          </>
        ) : (
          data?.map((course: CourseInterface) => (
            <CourseItem key={course.courseId} course={course} />
          ))
        )}
      </div>
    </>
  );
};

export { LandingCoursesMapped };

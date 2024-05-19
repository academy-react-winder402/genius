import { useEffect, useState } from "react";

import { getCourseTopAPI } from "../../../core/services/api/course/get-course-top.api";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";

const LandingCoursesMapped = () => {
  const [courses, setCourses] = useState<CourseInterface[] | null>();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const getCourses = await getCourseTopAPI(4);

        setCourses(getCourses);
      } catch (error) {
        return false;
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="landingCoursesMappedWrapper">
        {courses ? (
          courses.map((course: CourseInterface) => (
            <CourseItem key={course.courseId} course={course} />
          ))
        ) : (
          <>
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
            <CourseItemSkeleton />
          </>
        )}
      </div>
    </>
  );
};

export { LandingCoursesMapped };

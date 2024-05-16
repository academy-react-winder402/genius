import { useEffect, useState } from "react";

import { getCourseTopAPI } from "../../../core/services/api/course/get-course-top.api";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";

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
      <div className="flex flex-wrap gap-[18px] justify-center items-center mx-auto">
        {courses &&
          courses.map((course: CourseInterface) => (
            <CourseItem key={course.courseId} course={course} />
          ))}
      </div>
    </>
  );
};

export { LandingCoursesMapped };

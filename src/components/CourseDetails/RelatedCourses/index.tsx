import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { getCourseTopAPI } from "../../../core/services/api/course/get-course-top.api";

import { CourseInterface } from "../../../types/courses";

import { CourseItem } from "../../common/CourseItem";
import { Heading } from "../../common/Heading";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

const RelatedCourses = () => {
  const [courses, setCourses] = useState<CourseInterface[]>();

  useEffect(() => {
    const fetchCourses = async () => {
      const getCourses = await getCourseTopAPI(5);

      setCourses(getCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="mt-16">
      <Heading>دوره‌های مشابه</Heading>
      <div className="mt-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="my-swiper gap-9 w-[90%]"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
        >
          {courses?.map((course: CourseInterface) => (
            <SwiperSlide key={course.courseId}>
              <CourseItem course={course} isCourseDetail />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { RelatedCourses };

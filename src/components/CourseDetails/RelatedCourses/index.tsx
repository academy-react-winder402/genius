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
    <div className="mt-16 w-full">
      <Heading>دوره‌های مشابه</Heading>
      <div className="mt-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="my-swiper gap-5"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
        >
          {courses &&
            courses?.map((course: CourseInterface) => (
              <SwiperSlide
                key={course.courseId}
                className="lg:!w-[296px] lg:h-[389px] mr-4 py-5 mb-6"
              >
                <CourseItem course={course} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export { RelatedCourses };

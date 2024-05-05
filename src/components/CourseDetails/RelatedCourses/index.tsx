import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { courseItems } from "../../../core/data/courses/courseItems";

import { CourseItem } from "../../common/CourseItem";
import { Heading } from "../../common/Heading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedCourses = () => {
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
          {courseItems.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseItem course={course} isCourseDetail />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { RelatedCourses };

import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useCourseTop } from "../../../hooks/course/useCourseTop";

import { CourseItem } from "../../common/CourseItem";
import { CourseItemSkeleton } from "../../common/CourseItemSkeleton";
import { Heading } from "../../common/Heading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedCourses = () => {
  const { data, isLoading, error } = useCourseTop(5);

  if (error) toast.error("مشکلی در دریافت دوره های مشابه به وجود آمد !");

  const courseItemSkeletons = [1, 2, 3, 4];

  return (
    <div className="mt-16 w-full">
      <Heading>دوره‌های مشابه</Heading>
      <div className="mt-5">
        {isLoading && (
          <div className="flex gap-2">
            {courseItemSkeletons.map((skeleton) => (
              <CourseItemSkeleton key={skeleton} />
            ))}
          </div>
        )}
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
          {data &&
            data?.map((course) => (
              <SwiperSlide
                key={course.courseId}
                className="lg:!w-[296px] lg:h-[389px] mr-4 py-5 mb-6"
              >
                <CourseItem
                  course={course}
                  isUserFavorite={course?.isUserFavorite}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export { RelatedCourses };

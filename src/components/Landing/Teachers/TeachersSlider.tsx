import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { teacherItems } from "../../../core/data/landing/teacherItems";

import { TeacherItem } from "./TeacherItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeachersSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-swiper lg:w-[1320px]"
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
    >
      {teacherItems.map((teacher) => (
        <SwiperSlide key={teacher.id} className="even:mt-10 min-h-[200px]">
          <TeacherItem teacher={teacher} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { TeachersSlider };

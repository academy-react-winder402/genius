import { Swiper, SwiperSlide } from "swiper/react";

import { TeacherItem } from "./TeacherItem";
import { teacherItems } from "./teacherItems";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const TeachersSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-swiper"
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

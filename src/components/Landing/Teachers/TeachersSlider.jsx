import { Swiper, SwiperSlide } from "swiper/react";

import { teacherItems } from "./teacherItems";
import { TeacherItem } from "./TeacherItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const TeachersSlider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-swiper"
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

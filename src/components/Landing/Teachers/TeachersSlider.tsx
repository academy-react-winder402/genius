import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { getTeachersAPI } from "../../../core/services/api/teacher/get-teachers.api";

import { TeacherItemsInterface } from "../../../types/teacher-items";

import { toast } from "../../common/toast";
import { TeacherItem } from "./TeacherItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TeacherSkeleton } from "./TeacherSkeleton";

const TeachersSlider = () => {
  const [teachers, setTeachers] = useState<TeacherItemsInterface[]>();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const getTeachers = await getTeachersAPI();

        setTeachers(getTeachers);
      } catch (error) {
        toast.error("مشکلی در دریافت اساتید به وجود آمد !");
      }
    };

    fetchTeachers();
  }, []);

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
      {teachers ? (
        teachers.map((teacher) => (
          <SwiperSlide
            key={teacher.teacherId}
            className="even:mt-10 min-h-[200px]"
          >
            <TeacherItem teacher={teacher} />
          </SwiperSlide>
        ))
      ) : (
        <div className="flex gap-5">
          {[1, 2, 3, 4, 5].map((value) => (
            <SwiperSlide>
              <TeacherSkeleton key={value} />
            </SwiperSlide>
          ))}
        </div>
      )}
    </Swiper>
  );
};

export { TeachersSlider };

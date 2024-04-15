import { Heading } from "../common/Heading";
import { TeachersSlider } from "./Teachers/TeachersSlider";

const LandingTeachers = () => {
  return (
    <div className="bg-[#E3F2FD] pt-14 pb-10">
      <Heading title="اساتید برتر" />
      <div className="mt-18">
        <TeachersSlider />
      </div>
    </div>
  );
};

export { LandingTeachers };

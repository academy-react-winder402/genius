import { teacherItems } from "./teacherItems";
import { TeacherItem } from "./TeacherItem";

const TeachersSlider = () => {
  return (
    <div>
      {teacherItems.map((teacher) => (
        <div key={teacher.id} className="even:mt-10 min-h-[200px]">
          <TeacherItem teacher={teacher} />
        </div>
      ))}
    </div>
  );
};

export { TeachersSlider };

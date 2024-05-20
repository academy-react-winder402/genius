import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getTeachersAPI } from "../../../../core/services/api/teacher/get-teachers.api";

import { TeacherItemsInterface } from "../../../../types/teacher-items";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { SearchBox } from "../../../common/SearchBox";
import { FilterAccordion } from "../FilterAccordion";
import { toast } from "../../../common/toast";
import { RadioGroup } from "../../../common/RadioGroup";

interface TeacherFilterProps {
  setTeacherId: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const TeacherFilter = ({ setTeacherId, setQuery }: TeacherFilterProps) => {
  const [teachers, setTeachers] = useState<TeacherItemsInterface[]>();

  const handleTeachersChange = (item: number) => {
    setTeacherId(item);
  };

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
    <FilterAccordion title="اساتید دوره" isOpen>
      <div className="w-[96%] pr-5 mb-5">
        <SearchBox
          placeholder="جستجوی استاد"
          inputClasses="border-[1px] border-filterAccordionBorder dark:border-[#464646] placeholder:dark:text-darkText"
          setQuery={setQuery}
        />
      </div>
      <RadioGroup name="teacherGroup">
        {teachers &&
          teachers.map((teacher) => (
            <FilterCheckbox
              key={teacher.teacherId}
              type="radio"
              label={teacher.fullName}
              value={teacher.teacherId}
              onChange={() => handleTeachersChange(teacher.teacherId)}
            />
          ))}
      </RadioGroup>
      <button className="font-[500] text-[14px] text-primaryColor underline px-5 mt-2">
        مشاهده‌ی بیشتر
      </button>
    </FilterAccordion>
  );
};

export { TeacherFilter };

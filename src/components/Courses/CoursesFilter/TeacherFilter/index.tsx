import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { getTeachersAPI } from "../../../../core/services/api/teacher/get-teachers.api";

import { TeacherItemsInterface } from "../../../../types/teacher-items";

import { DeleteFilterState } from "../../../common/DeleteFilterState";
import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { SearchBox } from "../../../common/SearchBox";
import { toast } from "../../../common/toast";
import { FilterAccordion } from "../FilterAccordion";

interface TeacherFilterProps {
  setTeacherId: Dispatch<SetStateAction<number | undefined>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const TeacherFilter = ({ setTeacherId, setQuery }: TeacherFilterProps) => {
  const [teachers, setTeachers] = useState<TeacherItemsInterface[]>();
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

  const handleDeleteValueChange = () => {
    setTeacherId(undefined);
    setQuery(undefined);
    setIsValueChanged(false);
  };

  const handleTeachersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeacherId(+e.target.value);
    setIsValueChanged(true);
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
      <DeleteFilterState
        handleDeleteValueChange={handleDeleteValueChange}
        isValueChanged={isValueChanged}
      />
      <div className="w-[96%] pr-5 mb-5">
        <SearchBox
          placeholder="جستجوی استاد"
          inputClasses="border-[1px] border-filterAccordionBorder dark:border-[#464646] placeholder:dark:text-darkText"
          setQuery={setQuery}
          setIsValueChanged={setIsValueChanged}
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
              onChange={handleTeachersChange}
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

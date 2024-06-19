import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { getCourseTypesAPI } from "../../../../core/services/api/course/get-course-types.api";

import { CourseTypesInterface } from "../../../../types/course-types";

import { DeleteFilterState } from "../../../common/DeleteFilterState";
import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { toast } from "../../../common/toast";
import { FilterAccordion } from "../FilterAccordion";

interface TypesFilterProps {
  setCourseTypeId: Dispatch<SetStateAction<number | undefined>>;
}

const TypesFilter = ({ setCourseTypeId }: TypesFilterProps) => {
  const [courseTypes, setCourseTypes] = useState<CourseTypesInterface[]>();
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

  const handleDeleteValueChange = () => {
    setCourseTypeId(undefined);
    setIsValueChanged(false);
  };

  const handleCourseTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCourseTypeId(+e.target.value);
    setIsValueChanged(true);
  };

  useEffect(() => {
    const fetchCourseTypes = async () => {
      try {
        const getCourseTypes = await getCourseTypesAPI();

        setCourseTypes(getCourseTypes);
      } catch (error) {
        toast.error("مشکلی در دریافت تایپ دوره ها به وجود آمد !");
      }
    };

    fetchCourseTypes();
  }, []);

  return (
    <FilterAccordion title="تایپ دوره">
      <DeleteFilterState
        handleDeleteValueChange={handleDeleteValueChange}
        isValueChanged={isValueChanged}
      />
      <RadioGroup name="courseTypesGroup">
        {courseTypes &&
          courseTypes.map((type) => (
            <FilterCheckbox
              key={type.id}
              type="radio"
              value={type.id}
              label={type.typeName}
              onChange={handleCourseTypeChange}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { TypesFilter };

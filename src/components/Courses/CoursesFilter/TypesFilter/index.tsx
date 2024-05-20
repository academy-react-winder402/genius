import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getCourseTypesAPI } from "../../../../core/services/api/course/get-course-types.api";

import { CourseTypesInterface } from "../../../../types/course-types";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { toast } from "../../../common/toast";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface TypesFilterProps {
  setCourseTypeId: Dispatch<SetStateAction<number | undefined>>;
}

const TypesFilter = ({ setCourseTypeId }: TypesFilterProps) => {
  const [courseTypes, setCourseTypes] = useState<CourseTypesInterface[]>();

  const handleCourseTypeChange = (item: number) => setCourseTypeId(item);

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
      <RadioGroup name="courseTypesGroup">
        {courseTypes &&
          courseTypes.map((type) => (
            <FilterCheckbox
              key={type.id}
              type="radio"
              value={type.id}
              label={type.typeName}
              onChange={() => handleCourseTypeChange(type.id)}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { TypesFilter };

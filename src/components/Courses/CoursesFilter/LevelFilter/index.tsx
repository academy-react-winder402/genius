import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getAllCourseLevelAPI } from "../../../../core/services/api/course/get-all-course-level.api";

import { CourseLevelsInterface } from "../../../../types/course-levels";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { toast } from "../../../common/toast";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface LevelFilterProps {
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
}

const LevelFilter = ({ setCourseLevel }: LevelFilterProps) => {
  const [courseLevels, setCourseLevels] = useState<CourseLevelsInterface[]>();

  const handleCourseLevelChange = (item: number) => {
    setCourseLevel(item);
  };

  useEffect(() => {
    const fetchCourseLevels = async () => {
      try {
        const getCourseLevels = await getAllCourseLevelAPI();

        setCourseLevels(getCourseLevels);
      } catch (error) {
        toast.error("مشکلی در دریافت سطوح دوره ها به وجود آمد !");
      }
    };

    fetchCourseLevels();
  }, []);

  return (
    <FilterAccordion title="سطح دوره" isOpen>
      <RadioGroup name="courseLevelGroup">
        {courseLevels &&
          courseLevels.map((level) => (
            <FilterCheckbox
              type="radio"
              key={level.id}
              label={level.levelName}
              value={level.id}
              onChange={() => handleCourseLevelChange(level.id)}
            />
          ))}
      </RadioGroup>
    </FilterAccordion>
  );
};

export { LevelFilter };

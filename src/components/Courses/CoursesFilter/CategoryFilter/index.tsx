import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getTechnologiesAPI } from "../../../../core/services/api/course/get-technologies.api";

import { TechnologiesInterface } from "../../../../types/technologies";

import { DeleteFilterState } from "../../../common/DeleteFilterState";
import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { toast } from "../../../common/toast";
import { FilterAccordion } from "../FilterAccordion";

interface CategoryFilterProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
}

const CategoryFilter = ({ setListTechState }: CategoryFilterProps) => {
  const [technologies, setTechnologies] = useState<TechnologiesInterface[]>();
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

  const handleTechnologiesChange = (item: string) => {
    setListTechState((prevState) => {
      if (prevState.includes(item)) {
        // If item is already in the array, remove it
        return prevState.filter((i) => i !== item);
      } else {
        // If item is not is the array, add it
        return [...prevState, item];
      }
    });
    setIsValueChanged(true);
  };

  const handleDeleteValueChange = () => {
    setListTechState([]);
    setIsValueChanged(false);
  };

  const fetchTechnologies = async () => {
    try {
      const getTechnologies = await getTechnologiesAPI();

      setTechnologies(getTechnologies);
    } catch (error) {
      toast.error("مشکلی در دریافت دسته بندی ها به وجود آمد !");
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <FilterAccordion title="دسته بندی‌ ها">
      <DeleteFilterState
        handleDeleteValueChange={handleDeleteValueChange}
        isValueChanged={isValueChanged}
      />
      {technologies &&
        technologies?.map((technology) => (
          <FilterCheckbox
            key={technology.id}
            label={technology.techName}
            value={String(technology.id)}
            onChange={() => handleTechnologiesChange(String(technology.id))}
          />
        ))}
    </FilterAccordion>
  );
};

export { CategoryFilter };

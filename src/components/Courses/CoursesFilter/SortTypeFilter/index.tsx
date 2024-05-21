import { Dispatch, SetStateAction } from "react";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RadioGroup } from "../../../common/RadioGroup";
import { FilterAccordion } from "../FilterAccordion";

interface SortTypeFilterProps {
  setSortType: Dispatch<SetStateAction<string | undefined>>;
  sortType: string | undefined;
}

const SortTypeFilter = ({ setSortType, sortType }: SortTypeFilterProps) => {
  return (
    <FilterAccordion title="مرتب ساری">
      <RadioGroup name="sortTypeGroup">
        <FilterCheckbox
          type="radio"
          label="صعودی"
          value="ASC"
          onChange={(e) => {
            setSortType(e.target.value);
            console.log(sortType);
          }}
        />
        <FilterCheckbox
          type="radio"
          label="نزولی"
          value="DESC"
          onChange={(e) => {
            setSortType(e.target.value);
            console.log(sortType);
          }}
        />
      </RadioGroup>
    </FilterAccordion>
  );
};

export { SortTypeFilter };

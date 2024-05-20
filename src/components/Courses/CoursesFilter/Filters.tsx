import { Dispatch, SetStateAction } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { SubjectFilter } from "./SubjectFilter";
import { TeacherFilter } from "./TeacherFilter";
import { TimeFilter } from "./TimeFilter";

interface FiltersProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
}

const Filters = ({ setListTechState }: FiltersProps) => {
  return (
    <>
      <CategoryFilter setListTechState={setListTechState} />
      <PriceFilter />
      <SubjectFilter />
      <TimeFilter />
      <TeacherFilter />
    </>
  );
};

export { Filters };

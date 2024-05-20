import { Dispatch, SetStateAction } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { SubjectFilter } from "./SubjectFilter";
import { TeacherFilter } from "./TeacherFilter";
import { TimeFilter } from "./TimeFilter";

interface FiltersProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
  setTeacherId: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}

const Filters = ({
  setListTechState,
  setTeacherId,
  setQuery,
}: FiltersProps) => {
  return (
    <>
      <CategoryFilter setListTechState={setListTechState} />
      <PriceFilter />
      <SubjectFilter />
      <TimeFilter />
      <TeacherFilter setTeacherId={setTeacherId} setQuery={setQuery} />
    </>
  );
};

export { Filters };

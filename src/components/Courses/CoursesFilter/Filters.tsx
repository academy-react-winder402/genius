import { Dispatch, SetStateAction } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { LevelFilter } from "./LevelFilter";
import { PriceFilter } from "./PriceFilter";
import { TeacherFilter } from "./TeacherFilter";
import { TimeFilter } from "./TimeFilter";

interface FiltersProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
  setTeacherId: Dispatch<SetStateAction<number | undefined>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
}

const Filters = ({
  setListTechState,
  setTeacherId,
  setQuery,
  setCourseLevel,
}: FiltersProps) => {
  return (
    <>
      <CategoryFilter setListTechState={setListTechState} />
      <LevelFilter setCourseLevel={setCourseLevel} />
      <PriceFilter />
      <TimeFilter />
      <TeacherFilter setTeacherId={setTeacherId} setQuery={setQuery} />
    </>
  );
};

export { Filters };

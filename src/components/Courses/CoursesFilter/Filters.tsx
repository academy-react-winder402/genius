import { Dispatch, SetStateAction } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { LevelFilter } from "./LevelFilter";
import { PriceFilter } from "./PriceFilter";
import { TeacherFilter } from "./TeacherFilter";
import { TypesFilter } from "./TypesFilter";

interface FiltersProps {
  setListTechState: Dispatch<SetStateAction<string[]>>;
  setTeacherId: Dispatch<SetStateAction<number | undefined>>;
  setQuery: Dispatch<SetStateAction<string | undefined>>;
  setCourseLevel: Dispatch<SetStateAction<number | undefined>>;
  setCourseTypeId: Dispatch<SetStateAction<number | undefined>>;
  setCostDown: Dispatch<SetStateAction<number | undefined>>;
  setCostUp: Dispatch<SetStateAction<number | undefined>>;
}

const Filters = ({
  setListTechState,
  setTeacherId,
  setQuery,
  setCourseLevel,
  setCourseTypeId,
  setCostDown,
  setCostUp,
}: FiltersProps) => {
  return (
    <>
      <CategoryFilter setListTechState={setListTechState} />
      <LevelFilter setCourseLevel={setCourseLevel} />
      <TypesFilter setCourseTypeId={setCourseTypeId} />
      <PriceFilter setCostDown={setCostDown} setCostUp={setCostUp} />
      <TeacherFilter setTeacherId={setTeacherId} setQuery={setQuery} />
    </>
  );
};

export { Filters };

import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { SubjectFilter } from "./SubjectFilter";
import { TeacherFilter } from "./TeacherFilter";
import { TimeFilter } from "./TimeFilter";

const Filters = () => {
  return (
    <>
      <CategoryFilter />
      <PriceFilter />
      <SubjectFilter />
      <TimeFilter />
      <TeacherFilter />
    </>
  );
};

export { Filters };

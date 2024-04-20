import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

const SubjectFilter = () => {
  return (
    <FilterAccordion title="ّموضوعات">
      <FilterCheckbox label="Frontend" />
      <FilterCheckbox label="Backend" />
      <FilterCheckbox label="Fullstack" />
    </FilterAccordion>
  );
};

export { SubjectFilter };

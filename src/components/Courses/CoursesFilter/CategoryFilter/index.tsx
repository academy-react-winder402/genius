import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

const CategoryFilter = () => {
  return (
    <FilterAccordion title="دسته بندی‌ ها">
      <FilterCheckbox label="آموزش Frontend" value={1} />
      <FilterCheckbox label="آموزش Backend" value={2} />
      <FilterCheckbox label="آموزش Fullstack" value={3} />
    </FilterAccordion>
  );
};

export { CategoryFilter };

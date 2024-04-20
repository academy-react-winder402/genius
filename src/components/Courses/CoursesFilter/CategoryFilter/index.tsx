import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

const CategoryFilter = () => {
  return (
    <FilterAccordion title="دسته بندی‌ ها">
      <FilterCheckbox label="آموزش Frontend" />
      <FilterCheckbox label="آموزش Backend" />
      <FilterCheckbox label="آموزش Fullstack" />
    </FilterAccordion>
  );
};

export { CategoryFilter };

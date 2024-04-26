import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

const TimeFilter = () => {
  return (
    <FilterAccordion title="مدت زمان">
      <FilterCheckbox label="15 روزه" />
      <FilterCheckbox label="30 روزه" />
      <FilterCheckbox label="45 روزه" isChecked />
      <FilterCheckbox label="60 روزه" />
      <FilterCheckbox label="90 روزه" />
    </FilterAccordion>
  );
};

export { TimeFilter };

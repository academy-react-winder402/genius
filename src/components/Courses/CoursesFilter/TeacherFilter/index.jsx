import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { FilterAccordion } from "../FilterAccordion";

const TeacherFilter = () => {
  return (
    <FilterAccordion title="اساتید دوره" isOpen>
      <FilterCheckbox label="دکتر بحرالعلوم" />
      <FilterCheckbox label="مسعود هشمتی" />
      <FilterCheckbox label="بهاره یزدانی" />
      <FilterCheckbox label="سالار حیدری" />
      <button className="font-[500] text-[14px] text-primaryColor underline px-5 mt-2">
        مشاهده‌ی بیشتر
      </button>
    </FilterAccordion>
  );
};

export { TeacherFilter };

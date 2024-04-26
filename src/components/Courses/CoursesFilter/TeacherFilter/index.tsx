import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { SearchBox } from "../../../common/SearchBox";
import { FilterAccordion } from "../FilterAccordion";

const TeacherFilter = () => {
  return (
    <FilterAccordion title="اساتید دوره" isOpen>
      <div className="w-[96%] pr-5 mb-5">
        <SearchBox
          placeholder="جستجوی استاد"
          inputClasses="border-[1px] border-filterAccordionBorder dark:border-[#464646] placeholder:dark:text-darkText"
        />
      </div>
      <FilterCheckbox label="دکتر بحرالعلوم" />
      <FilterCheckbox label="مسعود هشمتی" />
      <FilterCheckbox label="بهاره یزدانی" isChecked />
      <FilterCheckbox label="سالار حیدری" />
      <button className="font-[500] text-[14px] text-primaryColor underline px-5 mt-2">
        مشاهده‌ی بیشتر
      </button>
    </FilterAccordion>
  );
};

export { TeacherFilter };

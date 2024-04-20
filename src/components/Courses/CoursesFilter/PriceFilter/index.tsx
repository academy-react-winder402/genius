import { useState } from "react";

import { FilterCheckbox } from "../../../common/FilterCheckbox";
import { RageInput } from "../../../common/RangeInput";
import { FilterAccordion } from "../FilterAccordion";

const PriceFilter = () => {
  const [priceValue, setPriceValue] = useState<any>([150000, 1450000]);

  return (
    <FilterAccordion title="قیمت" isOpen={true}>
      <div className="flex justify-between px-5">
        <span className="filterRangeText">از {priceValue[0]} تومان</span>
        <span className="filterRangeText">تا {priceValue[1]} تومان</span>
      </div>
      <div className="px-5 mt-3">
        <RageInput value={priceValue} setValue={setPriceValue} />
      </div>
      <div className="flex gap-3 px-5 mt-5">
        <FilterCheckbox label="فقط رایگان" className="priceFilterCheckbox" />
        <FilterCheckbox
          label="فقط پولی"
          className="priceFilterCheckbox"
          isChecked
        />
        <FilterCheckbox label="همه" className="priceFilterCheckbox" />
      </div>
    </FilterAccordion>
  );
};

export { PriceFilter };

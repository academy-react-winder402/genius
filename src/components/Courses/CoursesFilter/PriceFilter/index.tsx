import { Dispatch, SetStateAction, useState } from "react";

import { RageInput } from "../../../common/RangeInput";
import { FilterAccordion } from "../FilterAccordion";

interface PriceFilterProps {
  setCostDown: Dispatch<SetStateAction<number | undefined>>;
  setCostUp: Dispatch<SetStateAction<number | undefined>>;
}

const PriceFilter = ({ setCostDown, setCostUp }: PriceFilterProps) => {
  const [priceValue, setPriceValue] = useState<any>([150000, 1450000]);

  return (
    <FilterAccordion title="قیمت" isOpen>
      <div className="flex justify-between px-5">
        <span className="filterRangeText">از {priceValue[0]} تومان</span>
        <span className="filterRangeText">تا {priceValue[1]} تومان</span>
      </div>
      <div className="px-5 mt-3">
        <RageInput
          value={priceValue}
          setValue={setPriceValue}
          setCostDown={setCostDown}
          setCostUp={setCostUp}
        />
      </div>
    </FilterAccordion>
  );
};

export { PriceFilter };

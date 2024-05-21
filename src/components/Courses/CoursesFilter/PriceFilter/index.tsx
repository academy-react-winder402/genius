import { Dispatch, SetStateAction, useState } from "react";

import { RageInput } from "../../../common/RangeInput";
import { FilterAccordion } from "../FilterAccordion";
import { DeleteFilterState } from "../../../common/DeleteFilterState";
import { priceWithCommas } from "../../../../core/utils/number-helper.utils";

interface PriceFilterProps {
  setCostDown: Dispatch<SetStateAction<number | undefined>>;
  setCostUp: Dispatch<SetStateAction<number | undefined>>;
}

const PriceFilter = ({ setCostDown, setCostUp }: PriceFilterProps) => {
  const [priceValue, setPriceValue] = useState<number[]>([150000, 1450000]);
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

  const handleDeleteValueChange = () => {
    setCostDown(undefined);
    setCostUp(undefined);
    setIsValueChanged(false);
  };

  const formattedPriceValue = [
    priceWithCommas(priceValue[0]),
    priceWithCommas(priceValue[1]),
  ];

  return (
    <FilterAccordion title="قیمت" isOpen>
      {isValueChanged && (
        <DeleteFilterState
          handleDeleteValueChange={handleDeleteValueChange}
          isValueChanged={isValueChanged}
        />
      )}
      <div className="flex justify-between px-5">
        <span className="filterRangeText">
          از {formattedPriceValue[0]} تومان
        </span>
        <span className="filterRangeText">
          تا {formattedPriceValue[1]} تومان
        </span>
      </div>
      <div className="px-5 mt-3">
        <RageInput
          value={priceValue}
          setValue={setPriceValue}
          setCostUp={setCostUp}
          setCostDown={setCostDown}
          setIsValueChanged={setIsValueChanged}
        />
      </div>
    </FilterAccordion>
  );
};

export { PriceFilter };

import { Dispatch, SetStateAction } from "react";

import { priceWithCommas } from "../../../core/utils/number-helper.utils";

import { useTimeOut } from "../../../hooks/useTimeOut";

import { RangeSlider } from "../Slider";

interface RageInputProps {
  value: number | Record<number, number>;
  setValue: Dispatch<SetStateAction<string[]>>;
  setCostDown?: Dispatch<SetStateAction<number | undefined>>;
  setCostUp?: Dispatch<SetStateAction<number | undefined>>;
}

const RageInput = ({
  value,
  setValue,
  setCostDown,
  setCostUp,
}: RageInputProps) => {
  const priceTimeOut = useTimeOut();

  const handleRangeSliderInput = (value: number[]) => {
    setValue([priceWithCommas(value[0]), priceWithCommas(value[1])]);
    priceTimeOut(() => {
      setCostDown && setCostDown(+value[0]);
      setCostUp && setCostUp(value[1]);
    }, 800);
  };

  return (
    <RangeSlider
      value={+value}
      min={150000}
      max={1450000}
      onInput={(value: number[]) => handleRangeSliderInput(value)}
    />
  );
};

export { RageInput };

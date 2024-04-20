import React, { Dispatch, SetStateAction } from "react";

import { RangeSlider } from "../Slider";
import { priceWithCommas } from "../../../core/utils/number-helper.utils";

interface RageInputProps {
  value: number | Record<number, number>;
  setValue: Dispatch<SetStateAction<number[]>>;
}

const RageInput = ({ value, setValue }: RageInputProps) => {
  return (
    <RangeSlider
      value={Number(value)}
      min={150000}
      max={1450000}
      onInput={(value: any) =>
        setValue([priceWithCommas(value[0]), priceWithCommas(value[1])])
      }
    />
  );
};

export { RageInput };

import PropTypes from "prop-types";

import { RangeSlider } from "../Slider";
import { priceWithCommas } from "../../../core/utils/number-helper.utils";

const RageInput = ({ value, setValue }) => {
  return (
    <RangeSlider
      value={Number(value)}
      min={150000}
      max={1450000}
      onInput={(value) =>
        setValue([priceWithCommas(value[0]), priceWithCommas(value[1])])
      }
    />
  );
};

RageInput.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.any,
};

export { RageInput };

import { FormControlLabel } from "@mui/material";
import { Checkbox } from "../CheckBox";
import { FormGroup } from "../FormGroup";

import checkboxIcon from "../../../assets/images/Courses/Filter/checkbox.svg";
import checkedIcon from "../../../assets/images/Courses/Filter/checked.png";

interface FilterCheckboxProps {
  label: string;
  className?: string;
  isChecked?: boolean;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLDivElement>) => void;
}

const FilterCheckbox = ({
  label,
  className,
  isChecked,
  value,
  onChange,
}: FilterCheckboxProps) => {
  return (
    <div className={className}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<img src={checkboxIcon} />}
              checkedIcon={
                <div>
                  <img src={checkedIcon} className="w-full" />
                </div>
              }
              defaultChecked={isChecked}
              value={value}
              onChange={onChange}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
};

export { FilterCheckbox };

import { Dispatch, SetStateAction } from "react";

import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

interface RegisterStepProps {
  title: string;
  description: string;
  step: number;
  currentStep: number;
}

const RegisterStep = ({
  title,
  description,
  step,
  currentStep,
}: RegisterStepProps) => {
  return (
    <div className="flex gap-2">
      {step <= currentStep ? (
        <RiCheckboxCircleFill color="#2196F3" size={20} />
      ) : (
        <RiCheckboxCircleLine color="#2196F3" size={20} />
      )}
      <div>
        <h3 className="font-[600] text-white">{title}</h3>
        <p className="font-[400] text-white">{description}</p>
      </div>
    </div>
  );
};

export { RegisterStep };

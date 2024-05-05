import { ForgetPasswordStepOneForm } from "./ForgetPasswordSteps/ForgetPasswordStepOneForm";
import { ForgetPasswordStepTwoForm } from "./ForgetPasswordSteps/ForgetPasswordStepTwoForm";

interface ForgetPasswordFormProps {
  currentStep: number;
  setCurrentValue: (value: number) => void;
}

const ForgetPasswordForm = ({
  currentStep,
  setCurrentValue,
}: ForgetPasswordFormProps) => {
  return (
    <div className="w-full flex justify-center">
      {currentStep === 1 && (
        <ForgetPasswordStepOneForm setCurrentValue={setCurrentValue} />
      )}
      {currentStep === 2 && (
        <ForgetPasswordStepTwoForm setCurrentValue={setCurrentValue} />
      )}
    </div>
  );
};

export { ForgetPasswordForm };

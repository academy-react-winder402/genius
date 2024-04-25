import { ForgotPasswordStepOneForm } from "./ForgotPasswordSteps/ForgotPasswordStepOneForm";
import { ForgotPasswordStepTwoForm } from "./ForgotPasswordSteps/ForgotPasswordStepTwoForm";

interface currentStepProps {
  currentStep: number;
  setCurrentValue: (value: number) => void;
}

const ForgotPasswordForm = ({
  currentStep,
  setCurrentValue,
}: currentStepProps) => {
  return (
    <div className="w-full flex justify-center">
      {currentStep === 1 && (
        <ForgotPasswordStepOneForm setCurrentValue={setCurrentValue} />
      )}
      {currentStep === 2 && (
        <ForgotPasswordStepTwoForm setCurrentValue={setCurrentValue} />
      )}
    </div>
  );
};

export { ForgotPasswordForm };

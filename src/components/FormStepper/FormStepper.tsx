import "./FormStepper.scss";
import { STEPPER_ONE_TITLE, STEPPER_TWO_TITLE, STEPPER_THREE_TITLE, STEPPER_FOUR_TITLE } from "../../features/step-title-content";
import FormStep from "../FormStep/FormStep";
import { Dispatch, SetStateAction } from "react";
import { Steps } from "../../shared.types";

type FormStepperProps = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<Steps>>;
};

export type Step = {
  stepTitle: string;
  stepNumber: number;
};

export default function FormStepper({ activeStep, setActiveStep }: FormStepperProps) {
  const steps: Step[] = [
    { stepNumber: 1, stepTitle: STEPPER_ONE_TITLE },
    { stepNumber: 2, stepTitle: STEPPER_TWO_TITLE },
    { stepNumber: 3, stepTitle: STEPPER_THREE_TITLE },
    { stepNumber: 4, stepTitle: STEPPER_FOUR_TITLE },
  ];

  return (
    <div className="form-stepper">
      {steps.map((step, index) => (
        <FormStep step={step} activeStepNumber={activeStep} key={index} />
      ))}
    </div>
  );
}

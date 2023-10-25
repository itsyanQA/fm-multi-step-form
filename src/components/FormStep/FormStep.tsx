import { Step } from "../FormStepper/FormStepper";
import "./FormStep.scss";

type FormStepProps = {
  step: Step;
  activeStepNumber: number;
};

export default function FormStep({ step, activeStepNumber }: FormStepProps) {
  const selectedClass: string = step.stepNumber === activeStepNumber ? "selected" : "";
  
  return (
    <div className="step">
      <div className={`step__number ${selectedClass}`}>{step.stepNumber}</div>
      <div className="step__info-container">
        <span className="step__text">{`step ${step.stepNumber}`}</span>
        <span className="step__description">{step.stepTitle}</span>
      </div>
    </div>
  );
}

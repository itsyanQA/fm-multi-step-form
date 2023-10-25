import "./Form.scss";
import { Steps } from "../../shared.types";
import FormTitles from "../FormTitles/FormTitles";
import FormStepper from "../FormStepper/FormStepper";
import FormContact from "../FormContact/FormContact";
import FormPlan from "../FormPlan/FormPlan";
import FormAddons from "../FormAddons/FormAddons";
import FormSummary from "../FormSummary/FormSummary";
import { useFormData } from "../../hooks/use-form-data";
import FormThanks from "../FormThanks/FormThanks";

export default function Form() {
  const {
    activeStep,
    planBilling,
    selectedPlan,
    selectedAddons,
    isConfirmed,
    setActiveStep,
    setPlanBilling,
    setSelectedPlan,
    setSelectedAddons,
    formSummaryChangeHandler,
    setIsConfirmed,
  } = useFormData();

  const commonContentProps = { setActiveStep };
  const THANK_YOU_STEP = 5;

  const stepContent: Record<Steps, JSX.Element | null> = {
    1: <FormContact {...commonContentProps} />,
    2: (
      <FormPlan
        {...commonContentProps}
        planBilling={planBilling}
        setPlanBilling={setPlanBilling}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    ),
    3: (
      <FormAddons {...commonContentProps} planBilling={planBilling} selectedAddons={selectedAddons} setSelectedAddons={setSelectedAddons} />
    ),
    4: (
      <FormSummary
        {...commonContentProps}
        setIsConfirmed={setIsConfirmed}
        planBilling={planBilling}
        selectedPlan={selectedPlan}
        selectedAddons={selectedAddons}
        formSummaryChangeHandler={formSummaryChangeHandler}
      />
    ),
  };

  return (
    <div className="form-container">
      <FormStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="form-container__content">
        {!isConfirmed && <FormTitles stepNumber={activeStep} />}
        {isConfirmed ? <FormThanks /> : stepContent[activeStep]}
      </div>
    </div>
  );
}

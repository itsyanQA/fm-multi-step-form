import { useState } from "react";
import { Steps, Billing, Plan, Addon } from "../shared.types";

export const useFormData = () => {
  const [activeStep, setActiveStep] = useState<Steps>(1);
  const [planBilling, setPlanBilling] = useState<Billing>("Monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const CHOOSE_PLAN_STEP = 2;

  const formSummaryChangeHandler = (): void => {
    setPlanBilling("Monthly");
    setSelectedPlan(null);
    setSelectedAddons([]);
    setActiveStep(CHOOSE_PLAN_STEP);
  };

  return {
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
  };
};

import "./FormPlan.scss";
import { ReactComponent as ArcadePlanIcon } from "../../assets/svg/icon-arcade.svg";
import { ReactComponent as AdvacnedPlanIcon } from "../../assets/svg/icon-advanced.svg";
import { ReactComponent as ProPlanIcon } from "../../assets/svg/icon-pro.svg";
import { useState, Dispatch, SetStateAction } from "react";
import { Billing, Plan, Steps } from "../../shared.types";
import FormPlanItem from "../FormPlanItem/FormPlanItem";
import NextStepButton from "../UI/Buttons/NextStepButton/NextStepButton";
import GoBackButton from "../UI/Buttons/GoBackButton/GoBackButton";
import FormPlanBilling from "../FormPlanBilling/FormPlanBilling";
import { ButtonsContainer } from "../../styled/ButtonsContainer";

type FormPlanProps = {
  setActiveStep: Dispatch<SetStateAction<Steps>>;
  planBilling: Billing;
  setPlanBilling: Dispatch<SetStateAction<Billing>>;
  selectedPlan: Plan | null;
  setSelectedPlan: Dispatch<SetStateAction<Plan | null>>;
};

export default function FormPlan(props: FormPlanProps) {
  const { setActiveStep, planBilling, setPlanBilling, selectedPlan, setSelectedPlan } = props;
  const [isError, setIsError] = useState<boolean>(false);

  const planItems: Plan[] = [
    {
      icon: <ArcadePlanIcon />,
      text: "Arcade",
      pricing: planBilling === "Monthly" ? 9 : 90,
    },
    {
      icon: <AdvacnedPlanIcon />,
      text: "Advanced",
      pricing: planBilling === "Monthly" ? 12 : 120,
    },
    {
      icon: <ProPlanIcon />,
      text: "Pro",
      pricing: planBilling === "Monthly" ? 15 : 150,
    },
  ];
  return (
    <div className="plan-container">
      <div className="plan-container__upper-section">
        <div className={`plans ${isError ? "plans--error" : ""}`}>
          {planItems.map((plan) => (
            <FormPlanItem
              key={plan.text}
              planIcon={plan.icon}
              planText={plan.text}
              planPricing={plan.pricing}
              selectedPlan={selectedPlan}
              onClickHandler={() => setSelectedPlan(plan)}
              planBilling={planBilling}
            />
          ))}
        </div>
        <FormPlanBilling planBilling={planBilling} setPlanBilling={setPlanBilling} />
      </div>
      <ButtonsContainer>
        <GoBackButton setActiveStep={setActiveStep} />
        <NextStepButton
          clickHandler={() => {
            if (selectedPlan) {
              setActiveStep((prevStep) => (prevStep + 1) as Steps);
            } else {
              setIsError(true);
            }
          }}
        />
      </ButtonsContainer>
    </div>
  );
}

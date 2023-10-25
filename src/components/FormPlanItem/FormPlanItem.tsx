import { getPriceBillingPostfix } from "../../helper/common";
import { Plan, Billing } from "../../shared.types";
import "./FormPlanItem.scss";

type FormPlanItemProps = {
  planIcon: JSX.Element;
  planText: string;
  planPricing: number;
  onClickHandler: () => void;
  selectedPlan: Plan | null;
  planBilling: Billing;
  planFreeMonth?: string;
};

export default function FormPlanItem(props: FormPlanItemProps) {
  const { planIcon, planText, planPricing, selectedPlan, onClickHandler, planFreeMonth, planBilling } = props;
  const planPricingText = `+$${planPricing}/${getPriceBillingPostfix(planBilling)}`;

  return (
    <div className={`plan-item ${planText === selectedPlan?.text ? "plan-item--selected" : ""}`} onClick={onClickHandler}>
      {planIcon}
      <div className="plan-item__details">
        <span className="plan-item__name">{planText}</span>
        <span className="plan-item__pricing" key={planPricing}>
          {planPricingText}
        </span>
        {planFreeMonth && <span className="plan-item__plan-free-month">{planFreeMonth}</span>}
      </div>
    </div>
  );
}

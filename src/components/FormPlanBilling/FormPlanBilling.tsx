import { Billing } from "../../shared.types";
import Toggle from "../UI/Toggle/Toggle";
import "./FormPlanBilling.scss";
import { Dispatch, SetStateAction } from "react";

type FormPlanBillingProps = {
  planBilling: Billing;
  setPlanBilling: Dispatch<SetStateAction<Billing>>;
};

export default function FormPlanBilling({ planBilling, setPlanBilling }: FormPlanBillingProps) {

  return (
    <div className="form-plan-billing">
      <span className={`form-plan-billing__text ${planBilling === "Monthly" ? "active" : ""}`}>Monthly</span>
      <Toggle
        onClick={() =>
          setPlanBilling((prevBilling) => {
            return prevBilling === "Monthly" ? "Yearly" : "Monthly";
          })
        }
      />
      <span className={`form-plan-billing__text ${planBilling === "Yearly" ? "active" : ""}`}>Yearly</span>
    </div>
  );
}

import { getPriceBillingPostfix } from "../../helper/common";
import { Steps, Billing, Plan, Addon } from "../../shared.types";
import { ButtonsContainer } from "../../styled/ButtonsContainer";
import { ContentContainer } from "../../styled/ContentContainer";
import FormSummarySubItem from "../FormSummarySubItem/FormSummarySubItem";
import ConfirmButton from "../UI/Buttons/ConfirmButton/ConfirmButton";
import GoBackButton from "../UI/Buttons/GoBackButton/GoBackButton";
import "./FormSummary.scss";
import { Dispatch, SetStateAction } from "react";

type FormSummaryProps = {
  setActiveStep: Dispatch<SetStateAction<Steps>>;
  formSummaryChangeHandler: () => void;
  selectedPlan: Plan | null;
  selectedAddons: Addon[];
  planBilling: Billing;
  setIsConfirmed: Dispatch<SetStateAction<boolean>>;
};

export default function FormSummary(props: FormSummaryProps) {
  const { setActiveStep, planBilling, selectedPlan, selectedAddons, formSummaryChangeHandler, setIsConfirmed } = props;
  const billingPostfix = getPriceBillingPostfix(planBilling);
  const totalPriceText: string = `+$${selectedAddons.reduce(
    (acc, currentValue) => (acc as number) + currentValue.pricing,
    selectedPlan?.pricing
  )}/${billingPostfix}`;

  return (
    <ContentContainer>
      <div className="form-summary-wrapper">
        <div className="form-summary">
          <div className="form-summary__details">
            <div
              className={`form-summary__selected-plan-container ${
                selectedAddons?.length ? "form-summary__selected-plan-container--bottom-border" : ""
              }`}
            >
              <div className="form-summary__selected-plan-and-change-container">
                <span className="form-summary__selected-plan">{`${selectedPlan?.text} (${planBilling})`}</span>
                <button className="form-summary__change" onClick={formSummaryChangeHandler}>
                  Change
                </button>
              </div>
              <span className="form-summary__selected-plan-pricing">{`$${selectedPlan?.pricing}/${billingPostfix}`}</span>
            </div>
            <div className="form-summary__sub-items">
              {selectedAddons.map((addon) => {
                const subItemPriceText: string = `+$${addon.pricing}/${billingPostfix}`;
                return <FormSummarySubItem key={addon.title} title={addon.title} price={subItemPriceText} />;
              })}
            </div>
          </div>
        </div>
        <div className="form-summary__total">
          <FormSummarySubItem
            title={`Total (${planBilling === "Monthly" ? "per month" : "per year"})`}
            price={totalPriceText}
            isTotal={true}
          ></FormSummarySubItem>
        </div>
      </div>
      <ButtonsContainer>
        <GoBackButton setActiveStep={setActiveStep} />
        <ConfirmButton setIsConfirmed={setIsConfirmed} />
      </ButtonsContainer>
    </ContentContainer>
  );
}

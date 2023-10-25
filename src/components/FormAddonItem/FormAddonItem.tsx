import "./FormAddonItem.scss";
import { Addon, Billing } from "../../shared.types";
import { useRef } from "react";
import { getPriceBillingPostfix } from "../../helper/common";

type FormAddonItemProps = {
  addon: Addon;
  onClickHandler: () => void;
  selectedAddons: Addon[];
  planBilling: Billing;
};

export default function FormAddonItem({ addon, onClickHandler, selectedAddons, planBilling }: FormAddonItemProps) {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const addonPricingText = `+$${addon.pricing}/${getPriceBillingPostfix(planBilling)}`;

  return (
    <div
      className={`addon ${selectedAddons.find((selectedAddon) => selectedAddon.title === addon.title) ? "addon--selected" : ""}`}
      onClick={() => {
        onClickHandler();
        if (checkboxRef.current) {
          if (checkboxRef.current?.checked) {
            checkboxRef.current.checked = false;
          } else {
            checkboxRef.current.checked = true;
          }
        }
      }}
    >
      <div className="addon__input-and-details-container">
        <input
          className="addon__checkbox"
          type="checkbox"
          ref={checkboxRef}
          onClick={() => null}
          checked={!!selectedAddons.find((selectedAddon) => selectedAddon.title === addon.title)}
          readOnly
        />
        <div className="addon__details-container">
          <span className="addon__title">{addon.title}</span>
          <span className="addon__description">{addon.description}</span>
        </div>
      </div>
      <span className="addon__pricing">{addonPricingText}</span>
    </div>
  );
}

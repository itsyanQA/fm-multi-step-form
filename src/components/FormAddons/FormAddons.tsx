import { Billing, Steps, Addon } from "../../shared.types";
import FormAddonItem from "../FormAddonItem/FormAddonItem";
import "./FormAddons.scss";
import { Dispatch, SetStateAction } from "react";
import GoBackButton from "../UI/Buttons/GoBackButton/GoBackButton";
import NextStepButton from "../UI/Buttons/NextStepButton/NextStepButton";
import { ContentContainer } from "../../styled/ContentContainer";
import { ButtonsContainer } from "../../styled/ButtonsContainer";

type FormAddonsProps = {
  setActiveStep: Dispatch<SetStateAction<Steps>>;
  planBilling: Billing;
  selectedAddons: Addon[];
  setSelectedAddons: Dispatch<SetStateAction<Addon[]>>;
};

export default function FormAddons(props: FormAddonsProps) {
  const { setActiveStep, planBilling, selectedAddons, setSelectedAddons } = props;

  const addons: Addon[] = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      pricing: planBilling === "Monthly" ? 1 : 10,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      pricing: planBilling === "Monthly" ? 2 : 20,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      pricing: planBilling === "Monthly" ? 2 : 20,
    },
  ];

  return (
    <ContentContainer>
      <div className="addons">
        {addons.map((addon) => (
          <FormAddonItem
            key={addon.title}
            addon={addon}
            planBilling={planBilling}
            selectedAddons={selectedAddons}
            onClickHandler={() =>
              setSelectedAddons((prevAddons) => {
                if (prevAddons.find((prevAddon) => prevAddon.title === addon.title)) {
                  return prevAddons.filter((prevAddon) => prevAddon.title !== addon.title);
                }

                return [...prevAddons, addon];
              })
            }
          />
        ))}
      </div>
      <ButtonsContainer>
        <GoBackButton setActiveStep={setActiveStep} />
        <NextStepButton clickHandler={() => setActiveStep((prevStep) => (prevStep + 1) as Steps)} />
      </ButtonsContainer>
    </ContentContainer>
  );
}

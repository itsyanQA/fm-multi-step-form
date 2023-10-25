import { Dispatch, SetStateAction } from "react";
import { Steps } from "../../../../shared.types";
import "./GoBackButton.scss";

type GoBackButtonProps = {
  setActiveStep: Dispatch<SetStateAction<Steps>>;
};

export default function GoBackButton({ setActiveStep }: GoBackButtonProps) {
  return (
    <button className="go-back-button" onClick={() => setActiveStep((prevStep) => (prevStep - 1) as Steps)}>
      Go Back
    </button>
  );
}

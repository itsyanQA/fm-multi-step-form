import { Steps } from "../../../../shared.types";
import "./ConfirmButton.scss";
import { Dispatch, SetStateAction } from "react";

type ConfirmButtonProps = {
  setIsConfirmed: Dispatch<SetStateAction<boolean>>;
};

export default function ConfirmButton({ setIsConfirmed }: ConfirmButtonProps) {
  return (
    <button className="confirm-button" onClick={() => setIsConfirmed(true)}>
      Confirm
    </button>
  );
}

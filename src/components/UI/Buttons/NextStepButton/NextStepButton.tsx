import "./NextStepButton.scss";

type NextStepButtonsProps = {
  clickHandler?: () => void;
};

export default function NextStepButton({ clickHandler }: NextStepButtonsProps) {
  return (
    <button
      className="next-step-button"
      onClick={() => {
        if (clickHandler) {
          return clickHandler();
        }
      }}
    >
      Next Step
    </button>
  );
}

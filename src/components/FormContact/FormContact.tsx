import { Input } from "../../styled/Input";
import "./FormContact.scss";
import { useContactForm } from "../../hooks/use-contact-form";
import { Dispatch, SetStateAction } from "react";
import FormEmptyInputMsg from "../FormEmptyInputMsg/FormEmptyInputMsg";
import NextStepButton from "../UI/Buttons/NextStepButton/NextStepButton";
import { Steps } from "../../shared.types";
import { ButtonsContainer } from "../../styled/ButtonsContainer";

type FormContactProps = {
  setActiveStep: Dispatch<SetStateAction<Steps>>;
};

export default function FormContact({ setActiveStep }: FormContactProps) {
  const { values, actions } = useContactForm();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let isValidForm: boolean = true;
    const formInputs = [...Array.from(document.querySelectorAll("#form-input") as NodeListOf<HTMLInputElement>)];

    for (const input of formInputs) {
      if (!input.checkValidity() || !input.value) {
        isValidForm = false;
      }
    }

    checkForNonFilledFields();

    if (isValidForm) {
      setActiveStep(2);
    }
  };

  const checkForNonFilledFields = (): void => {
    if (!values.name.length) actions.setIsEmptyName(true);
    if (!values.email.length) actions.setIsEmptyEmail(true);
    if (!values.phone.length) actions.setIsEmptyPhone(true);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-contact">
        <div className="form-contact__input-container">
          <div className="form-contact__label-container">
            <label className="form-contact__label">Name</label>
            {!!(!values.name.length && values.isEmptyName) && <FormEmptyInputMsg />}
          </div>
          <Input
            id="form-input"
            value={values.name}
            onChange={(e) => actions.setName(e.target.value)}
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="form-contact__input-container">
          <div className="form-contact__label-container">
            <label className="form-contact__label">Email Address</label>
            {!!(!values.email.length && values.isEmptyEmail) && <FormEmptyInputMsg />}
          </div>
          <Input
            id="form-input"
            value={values.email}
            onChange={(e) => actions.setEmail(e.target.value)}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="form-contact__input-container">
          <div className="form-contact__label-container">
            <label className="form-contact__label">Phone Number</label>
            {!!(!values.phone.length && values.isEmptyPhone) && <FormEmptyInputMsg />}
          </div>
          <Input
            id="form-input"
            value={values.phone}
            onChange={(e) => actions.setPhone(e.target.value)}
            type="tel"
            placeholder="e.g +1 234 567 890"
            pattern="^(\+\d{1,4}(\s|\d{1,4}|\-)+|\d{10}|\+\d{3}\s\d{3}(\-\d{3})+)$"
            minLength={10}
          />
        </div>
      </div>
      <ButtonsContainer $singleButton={true}>
        <NextStepButton />
      </ButtonsContainer>
    </form>
  );
}

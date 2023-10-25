import "./FormThanks.scss";
import { ReactComponent as ThankYouImage } from "../../assets/svg/icon-thank-you.svg";

export default function FormThanks() {
  return (
    <div className="thank-you">
      {<ThankYouImage />}
      <div className="thank-you__typography">
        <h1 className="thank-you__title">Thank you!</h1>
        <p className="thank-you__description">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

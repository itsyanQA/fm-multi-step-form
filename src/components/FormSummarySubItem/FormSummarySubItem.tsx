import "./FormSummarySubItem.scss";

type FormSummarySubItemProps = {
  title: string;
  price: string;
  isTotal?: boolean;
};

export default function FormSummarySubItem({ title, price, isTotal }: FormSummarySubItemProps) {
  return (
    <div className="summary-sub-item">
      <span className="summary-sub-item__title">{title}</span>
      <span className={`summary-sub-item__price ${isTotal ? "summary-sub-item__price--total" : ""}`}>{price}</span>
    </div>
  );
}

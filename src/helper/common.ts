import { Billing } from "../shared.types";

export function getPriceBillingPostfix(billing: Billing): "mo" | "yr" | undefined {
  return billing === "Monthly" ? "mo" : "yr";
}

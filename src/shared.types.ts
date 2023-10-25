export type Plan = {
  icon: JSX.Element;
  text: Plans;
  pricing: number;
};

export type Addon = {
  title: string;
  description: string;
  pricing: number;
};

export type Plans = "Arcade" | "Advanced" | "Pro";

export type Billing = "Monthly" | "Yearly";

export type Steps = 1 | 2 | 3 | 4;

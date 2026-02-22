import type { Size } from "../../../types";

export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: Size;
  hoverable?: boolean;
}


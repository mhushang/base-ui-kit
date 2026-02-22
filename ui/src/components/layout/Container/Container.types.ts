import type { Size } from "../../../types";

export type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerMaxWidth;
  padding?: Size;
}


import type { SelectHTMLAttributes } from "react";
import type { Size } from "../../../types";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: Size;
  error?: boolean;
}

import type { InputHTMLAttributes } from "react";
import type { Size } from "../../../types";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  error?: boolean;
}

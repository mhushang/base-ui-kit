import { forwardRef } from "react";

import type { InputProps } from "./Input.types";
import { cn } from "../../../utils/public/cn";

import styles from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", error = false, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          styles.input,
          styles[size],
          error && styles.error,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

import { forwardRef } from "react";

import type { SelectProps } from "./Select.types";
import { cn } from "../../../utils/public/cn";

import styles from "./Select.module.scss";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", error = false, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          styles.select,
          styles[size],
          error && styles.error,
          className
        )}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";

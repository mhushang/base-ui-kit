import { useId, cloneElement, isValidElement } from "react";

import { cn } from "../../../utils/public/cn";
import type { FormFieldProps } from "./FormField.types";

import styles from "./FormField.module.scss";

export const FormField = ({
  label,
  hint,
  error,
  required,
  children,
  className,
}: FormFieldProps) => {
  // useId generates stable, unique IDs for accessibility
  // Critical for linking label → input → error message
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  // Clone child to inject accessible props automatically
  // Consumer doesn't need to wire up aria attributes manually
  const enhancedChild = isValidElement<Record<string, unknown>>(children)
    ? cloneElement(children, {
        id,
        "aria-describedby":
          [error && errorId, !error && hint && hintId]
            .filter(Boolean)
            .join(" ") ||
          undefined,
        "aria-invalid": !!error || undefined,
        "aria-required": required || undefined,
        error: !!error,
        ...children.props,
      })
    : children;

  return (
    <div className={cn(styles.field, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {enhancedChild}

      {hint && !error && (
        <span id={hintId} className={styles.hint}>
          {hint}
        </span>
      )}

      {error && (
        <span id={errorId} role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};

FormField.displayName = "FormField";

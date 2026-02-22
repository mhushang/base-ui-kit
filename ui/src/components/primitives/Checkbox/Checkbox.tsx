import { forwardRef, useEffect, useRef } from "react";

import { cn } from "../../../utils/public/cn";
import type { CheckboxProps } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, indeterminate = false, disabled, className, id, ...props },
    forwardedRef
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    const setRef = (node: HTMLInputElement | null) => {
      (innerRef as React.MutableRefObject<HTMLInputElement | null>).current =
        node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={cn(styles.wrapper, disabled && styles.disabled, className)}
      >
        <input
          ref={setRef}
          type="checkbox"
          id={id}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

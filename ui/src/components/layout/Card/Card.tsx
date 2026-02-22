import { forwardRef } from "react";

import type { CardProps } from "./Card.types";
import { cn } from "../../../utils/public/cn";

import styles from "./Card.module.scss";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      hoverable = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.card,
          styles[variant],
          styles[padding],
          hoverable && styles.hoverable,
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";


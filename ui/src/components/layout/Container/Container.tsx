import { forwardRef } from "react";

import type { ContainerProps } from "./Container.types";
import { cn } from "../../../utils/public/cn";

import styles from "./Container.module.scss";

const MAX_WIDTH_CLASS: Record<
  NonNullable<ContainerProps["maxWidth"]>,
  string
> = {
  sm: styles.max_sm,
  md: styles.max_md,
  lg: styles.max_lg,
  xl: styles.max_xl,
  "2xl": styles.max_2xl,
  full: styles.max_full,
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = "lg", padding = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.container,
          styles[padding],
          MAX_WIDTH_CLASS[maxWidth],
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";


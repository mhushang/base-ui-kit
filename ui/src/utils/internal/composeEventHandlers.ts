type EventHandler<E> = (event: E) => void;

/**
 * Compose two event handlers.
 * The user handler runs first; if it calls `event.preventDefault()` the
 * internal handler will not run.
 */
export function composeEventHandlers<E extends { defaultPrevented?: boolean }>(
  userHandler: EventHandler<E> | undefined,
  internalHandler: EventHandler<E> | undefined
): EventHandler<E> {
  return (event) => {
    userHandler?.(event);
    if (event?.defaultPrevented) return;
    internalHandler?.(event);
  };
}

import { useCallback } from "react";

import { useLatestRef } from "./useLatestRef";

export function useEventCallback<Args extends unknown[], R>(
  fn: (...args: Args) => R
): (...args: Args) => R {
  const fnRef = useLatestRef(fn);
  return useCallback((...args: Args) => fnRef.current(...args), [fnRef]);
}

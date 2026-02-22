import { useCallback } from "react";

import type { Ref } from "react";
import { setRef } from "../../utils/internal/setRef";
import { useLatestRef } from "./useLatestRef";

export function useMergedRefs<T>(...refs: Array<Ref<T> | undefined>) {
  const refsRef = useLatestRef(refs);
  return useCallback(
    (value: T | null) => {
      for (const ref of refsRef.current) setRef(ref, value);
    },
    [refsRef]
  );
}

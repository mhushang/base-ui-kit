import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "../../utils/internal/isBrowser";

export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;

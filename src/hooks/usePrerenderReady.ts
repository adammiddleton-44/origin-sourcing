import { useEffect } from "react";

declare global {
  interface Window {
    prerenderReady?: boolean;
  }
}

export function usePrerenderReady(ready: boolean) {
  useEffect(() => {
    if (ready) {
      window.prerenderReady = true;
    }
  }, [ready]);
}

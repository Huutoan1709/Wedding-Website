"use client";

import { useEffect } from "react";

export function useResetScrollOnLoad() {
  useEffect(() => {
    const supportsManualRestoration = "scrollRestoration" in window.history;

    if (supportsManualRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      if (supportsManualRestoration) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);
}

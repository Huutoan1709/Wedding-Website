"use client";

import { useEffect, useRef, useState } from "react";

type InviteAutoScrollOptions = {
  enabled: boolean;
  blocked?: boolean;
  restartKey?: string | number | boolean;
  speed?: number;
  startDelay?: number;
};

export function useInviteAutoScroll({ enabled, blocked = false, restartKey, speed = 0.018, startDelay = 1400 }: InviteAutoScrollOptions) {
  const [paused, setPaused] = useState(false);
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);
  const wasEnabledRef = useRef(enabled);
  const restartKeyRef = useRef(restartKey);

  const stopAutoScroll = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  useEffect(() => {
    const shouldRestart = enabled && (!wasEnabledRef.current || restartKeyRef.current !== restartKey);

    if (shouldRestart) {
      hasStartedRef.current = false;
      setPaused(false);
    }

    wasEnabledRef.current = enabled;
    restartKeyRef.current = restartKey;
  }, [enabled, restartKey]);

  useEffect(() => {
    if (!enabled || paused || blocked) {
      stopAutoScroll();
      return;
    }

    let lastTime: number | null = null;
    const delay = hasStartedRef.current ? 0 : startDelay;
    timerRef.current = window.setTimeout(() => {
      hasStartedRef.current = true;
      timerRef.current = null;

      const scrollStep = (time: number) => {
        const scrollingElement = document.scrollingElement || document.documentElement;

        if (lastTime === null) {
          lastTime = time;
        }

        const delta = time - lastTime;
        lastTime = time;
        const bottom = scrollingElement.scrollHeight - scrollingElement.clientHeight;

        if (scrollingElement.scrollTop >= bottom - 4) {
          setPaused(true);
          frameRef.current = null;
          return;
        }

        scrollingElement.scrollTop += delta * speed;
        frameRef.current = window.requestAnimationFrame(scrollStep);
      };

      frameRef.current = window.requestAnimationFrame(scrollStep);
    }, delay);

    return stopAutoScroll;
  }, [blocked, enabled, paused, speed, startDelay]);

  return {
    paused,
    toggleAutoScroll: () => {
      if (enabled && !blocked) {
        setPaused((current) => !current);
      }
    }
  };
}

export function shouldIgnoreAutoScrollToggle(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(target.closest("button,a,input,textarea,select,label,iframe,[data-ignore-auto-scroll-toggle]"));
}

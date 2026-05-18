"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type InviteAutoScrollOptions = {
  enabled: boolean;
  blocked?: boolean;
  restartKey?: string | number | boolean;
  speed?: number;
  startDelay?: number;
};

export function useInviteAutoScroll({ enabled, blocked = false, restartKey, speed = 0.045, startDelay = 700 }: InviteAutoScrollOptions) {
  const [paused, setPaused] = useState(false);
  const [externallyBlocked, setExternallyBlocked] = useState(false);
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    lastTimeRef.current = null;
  }, []);

  useEffect(() => {
    hasStartedRef.current = false;
    stop();

    window.queueMicrotask(() => setPaused(false));
  }, [restartKey, stop]);

  useEffect(() => {
    const onBlock = () => setExternallyBlocked(true);
    const onUnblock = () => setExternallyBlocked(false);

    window.addEventListener("invite:auto-scroll-block", onBlock);
    window.addEventListener("invite:auto-scroll-unblock", onUnblock);

    return () => {
      window.removeEventListener("invite:auto-scroll-block", onBlock);
      window.removeEventListener("invite:auto-scroll-unblock", onUnblock);
    };
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [stop]);

  useEffect(() => {
    const shouldRun = enabled && !paused && !blocked && !externallyBlocked && !document.hidden;

    if (!shouldRun) {
      stop();
      return;
    }

    const scrollStep = (time: number) => {
      const scrollingElement = document.scrollingElement || document.documentElement;
      const bottom = scrollingElement.scrollHeight - scrollingElement.clientHeight;

      if (scrollingElement.scrollTop >= bottom - 2) {
        setPaused(true);
        stop();
        return;
      }

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      scrollingElement.scrollTop = Math.min(bottom, scrollingElement.scrollTop + delta * speed);
      frameRef.current = window.requestAnimationFrame(scrollStep);
    };

    const delay = hasStartedRef.current ? 0 : startDelay;
    timerRef.current = window.setTimeout(() => {
      hasStartedRef.current = true;
      timerRef.current = null;
      frameRef.current = window.requestAnimationFrame(scrollStep);
    }, delay);

    return stop;
  }, [blocked, enabled, externallyBlocked, paused, speed, startDelay, stop]);

  return {
    paused,
    toggleAutoScroll: () => {
      if (enabled && !blocked && !externallyBlocked) {
        setPaused((current) => !current);
      }
    }
  };
}

export function shouldIgnoreAutoScrollToggle(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(target.closest("button,a,input,textarea,select,label,iframe,[role='dialog'],[data-ignore-auto-scroll-toggle],.guestbook-scroll"));
}

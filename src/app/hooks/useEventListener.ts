import { useEffect, RefObject } from "react";

export default function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  element?: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR protection

    const target: HTMLElement | Window = element?.current ?? window;

    target.addEventListener(eventName, handler as EventListener);

    return () => {
      target.removeEventListener(eventName, handler as EventListener);
    };
  }, [eventName, handler, element]);
}

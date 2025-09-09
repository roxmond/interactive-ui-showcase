import { useEffect, RefObject } from "react";

export default function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  element: RefObject<HTMLElement> | Window = window
) {
  useEffect(() => {
    const target: any =
      element && "current" in (element as any) ? element.current : window;
    if (!target) return;
    target.addEventListener(eventName, handler as EventListener);
    return () =>
      target.removeEventListener(eventName, handler as EventListener);
  }, [eventName, handler, element]);
}

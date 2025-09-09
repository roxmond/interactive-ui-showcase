import { useEffect, RefObject } from "react";

export default function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  element: RefObject<HTMLElement> | Window = window
) {
  useEffect(() => {
    let target: HTMLElement | Window;
    if ("current" in element) {
      if (!element.current) return;
      target = element.current;
    } else {
      target = element;
    }

    target.addEventListener(eventName, handler as EventListener);

    return () => {
      target.removeEventListener(eventName, handler as EventListener);
    };
  }, [eventName, handler, element]);
}

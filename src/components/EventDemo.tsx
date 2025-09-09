"use client";
import { useRef, useState, useCallback } from "react";
import useEventListener from "@/app/hooks/useEventListener";

export default function EventDemo() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [last, setLast] = useState<string | null>(null);

  const handler = useCallback((e: MouseEvent) => {
    setLast(`Mouse at ${e.clientX}, ${e.clientY}`);
  }, []);

  // Attach listener: default is window
  useEventListener("mousemove", handler);

  return (
    <div className="card p-4 max-w-xl">
      <h3 className="font-bold">Event Listener Demo</h3>
      <div ref={boxRef} className="p-4 border mt-2">
        <p>
          Move your mouse - The handler listens to global{" "}
          <strong>mousemove</strong>.
        </p>
        <p className="mt-2 text-sm">{last ?? "—"}</p>
      </div>
    </div>
  );
}

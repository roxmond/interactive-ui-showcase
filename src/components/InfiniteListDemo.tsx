"use client";
import { useEffect, useState, useRef } from "react";

export default function InfiniteListDemo() {
  const [all, setAll] = useState<{ id: number; title: string }[]>([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Demo dataset
    setAll(
      Array.from({ length: 200 }).map((_, i) => ({
        id: i + 1,
        title: `Item ${i + 1}`,
      }))
    );
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => Math.min(c + 20, all.length));
        }
      },
      { threshold: 1 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [all.length]);

  const visibleItems = all.slice(0, visibleCount);

  return (
    <div className="card p-4">
      <h3 className="font-bold">Infinite Scroll Demo</h3>
      <ul className="divide-y mt-3 max-h-[70vh] overflow-auto">
        {visibleItems.map((item) => (
          <li key={item.id} className="py-2">
            {item.title}
          </li>
        ))}
        {visibleCount < all.length && (
          <li
            ref={sentinelRef}
            className="h-10 flex items-center justify-center text-sm text-base-content/50"
          >
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-md mr-2"></span>
              <p>Loading...</p>
            </div>
          </li>
        )}
        {visibleCount >= all.length && (
          <li className="text-center text-sm py-4 text-success">
            All items have loaded.
          </li>
        )}
      </ul>
    </div>
  );
}

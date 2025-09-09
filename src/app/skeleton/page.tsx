"use client";

import { useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";

export default function SkeletonPage() {
  const [loading, setLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  const loadCard = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1sec delay
  };

  // Initial load
  if (loading && refreshCount === 0) {
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <div className="space-y-4">
      <button
        className="btn btn-sm btn-outline"
        onClick={() => {
          setRefreshCount((c) => c + 1);
          loadCard();
        }}
      >
        Refresh Card
      </button>

      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

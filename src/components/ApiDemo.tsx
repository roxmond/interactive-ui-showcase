"use client";
import useApi from "@/app/hooks/useApi";
import { useState } from "react";

export default function APIDemo() {
  const { call, loading, error } = useApi<{
    items: { id: number; title: string }[];
  }>();
  const [items, setItems] = useState<{ id: number; title: string }[]>([]);
  const [endpoint, setEndpoint] = useState("/api/data");
  const [endpointError, setEndpointError] = useState("");

  const handleCall = async () => {
    if (!endpoint.trim()) {
      setEndpointError("Endpoint is required");
      return;
    }
    setEndpointError("");
    try {
      const res = await call(endpoint);
      setItems(res.items.slice(0, 20));
    } catch {}
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="card p-4 max-w-2xl">
      <h3 className="font-bold mb-4">API Call Demo</h3>

      <div className="flex gap-2 mb-4">
        <div className="relative w-full">
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="input input-bordered flex-1 w-full"
            placeholder="API endpoint. Default: /api/data"
          />

          {endpointError && (
            <p className="text-error text-sm absolute left-0 -bottom-5">
              {endpointError}
            </p>
          )}
        </div>
        <button className="btn" onClick={handleCall}>
          Call Data
        </button>
        <button className="btn btn-ghost" onClick={handleClear}>
          Clear
        </button>
      </div>

      {loading && (
        <div className="flex justify-start items-center">
          <span className="loading loading-spinner loading-md mr-2"></span>
          <p>Loading...</p>
        </div>
      )}
      {error && <p className="text-error">Error: {error}</p>}

      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i.id} className="p-2 border rounded">
            {i.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

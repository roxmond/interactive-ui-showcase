"use client";
import { useState, useCallback } from "react";

export default function useApi<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const call = useCallback(async (url: string, opts?: RequestInit) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, opts);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: T = await res.json();
      setLoading(false);
      return data;
    } catch (err: any) {
      setError(err?.message || "Unknown error");
      setLoading(false);
      throw err;
    }
  }, []);

  return { call, loading, error };
}

"use client";
import { useEffect, useState } from "react";
import usePagination from "@/app/hooks/usePagination";

export default function ListDemo() {
  const [all, setAll] = useState<{ id: number; title: string }[]>([]);
  const [perPage, setPerPage] = useState(10);
  const [perPageInput, setPerPageInput] = useState("10");
  const [perPageError, setPerPageError] = useState("");

  useEffect(() => {
    setAll(
      Array.from({ length: 200 }).map((_, i) => ({
        id: i + 1,
        title: `Item ${i + 1}`,
      }))
    );
  }, []);

  const { page, setPage, total, pageItems } = usePagination(all, perPage);

  const handlePerPageChange = () => {
    if (!perPageInput.trim()) {
      setPerPageError("Items per page is required");
      return;
    }
    const val = Number(perPageInput);
    if (isNaN(val) || val <= 0) {
      setPerPageError("Enter a valid positive number");
      return;
    }
    setPerPageError("");
    setPerPage(val);
    setPage(1);
  };

  return (
    <div className="card p-4 max-w-2xl">
      <h3 className="font-bold mb-2">List Demo (Pagination)</h3>

      <div className="flex gap-2 mb-4 items-center">
        <label className="flex flex-col text-sm text-gray-400">
          Items per page
          <input
            type="number"
            value={perPageInput}
            onChange={(e) => setPerPageInput(e.target.value)}
            className="input input-bordered w-24 mt-1"
            placeholder="Items per page"
          />
        </label>
        <button className="btn btn-sm mt-6" onClick={handlePerPageChange}>
          Set
        </button>
      </div>
      {perPageError && (
        <p className="text-error text-sm mb-2">{perPageError}</p>
      )}

      <ul className="divide-y mt-3">
        {pageItems.map((item) => (
          <li key={item.id} className="py-2">
            {item.title}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 mt-3">
        <button
          className="btn btn-sm"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <div>
          Page {page} / {total}
        </div>
        <button
          className="btn btn-sm"
          disabled={page >= total}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

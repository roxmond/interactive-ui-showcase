import { useState, useMemo } from "react";

export default function usePagination<T>(items: T[], perPage = 10) {
  const [page, setPage] = useState(1);
  const total = Math.ceil(items.length / perPage);

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, page, perPage]);

  return { page, setPage, total, pageItems };
}

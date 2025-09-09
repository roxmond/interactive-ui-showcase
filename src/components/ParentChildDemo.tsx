"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";

// 👶 Child component
const Child = ({ name, onClick }: { name: string; onClick: () => void }) => {
  const renderCount = useRef(0);

  // Αυξάνουμε το counter ΜΟΝΟ στον client
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="p-2 border rounded mb-2">
      <div>
        Child: {name} | Rendered: {renderCount.current} times
      </div>
      <button className="btn btn-xs mt-1" onClick={onClick}>
        Click {name}
      </button>
    </div>
  );
};

// 👶 Memoized Child (με React.memo)
const ChildMemo = React.memo(Child);

// 👨 Parent component
export default function MemoDemo() {
  const [parentCount, setParentCount] = useState(0);

  const parentRenderCount = useRef(0);

  // Αυξάνουμε το counter ΜΟΝΟ στον client
  useEffect(() => {
    parentRenderCount.current += 1;
  });

  // Memoized data (Child names)
  const childNames = useMemo(() => ["A", "B"], []);

  // Memoized callback (child δεν ξανα-render όταν αλλάζει το parent)
  const handleClick = useCallback(() => {
    alert("Clicked child!");
  }, []);

  return (
    <div className="p-4 max-w-md">
      <div className="mb-4 p-2 border rounded bg-base-200">
        Parent: Rendered {parentRenderCount.current} times
      </div>

      <button className="btn mb-4" onClick={() => setParentCount((c) => c + 1)}>
        Re-render Parent ({parentCount})
      </button>

      <h4 className="font-bold">Memoized Children</h4>
      {childNames.map((n) => (
        <ChildMemo key={n} name={n} onClick={handleClick} />
      ))}

      <h4 className="font-bold mt-4">Normal Children</h4>
      {childNames.map((n) => (
        <Child key={n} name={n} onClick={handleClick} />
      ))}
    </div>
  );
}

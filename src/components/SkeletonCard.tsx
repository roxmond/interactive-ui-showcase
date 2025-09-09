export default function SkeletonCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm animate-pulse">
      <div className="card-body space-y-3">
        {/* Title placeholder */}
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>

        {/* Text placeholder */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* Actions placeholder */}
        <div className="card-actions justify-end">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

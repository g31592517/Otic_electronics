import Button from "./Button";
import { PackageX } from "lucide-react";

export default function EmptyState({ title, message, onClear }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <PackageX className="w-16 h-16 text-slate-400 mb-4" />
      <h3 className="font-display font-semibold text-xl text-ink-900 mb-2">
        {title || "No results found"}
      </h3>
      <p className="font-body text-slate-500 mb-6 max-w-md">
        {message || "Try adjusting your filters or search term."}
      </p>
      {onClear && (
        <Button variant="secondary" onClick={onClear}>
          Clear Filters
        </Button>
      )}
    </div>
  );
}

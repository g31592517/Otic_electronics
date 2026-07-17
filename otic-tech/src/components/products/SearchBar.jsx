import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ open, onClose, search, setSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4">
        <div className="bg-paper-50 rounded-card shadow-xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-paper-200">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands, categories..."
              className="flex-1 font-body text-base text-ink-900 placeholder-slate-400 bg-transparent focus:outline-none"
            />
            <button
              onClick={onClose}
              aria-label="Close search"
              className="p-1 text-slate-400 hover:text-ink-900 transition-colors duration-150"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {search && (
            <div className="px-4 py-3 font-body text-sm text-slate-500">
              Searching for <span className="font-medium text-ink-900">&ldquo;{search}&rdquo;</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

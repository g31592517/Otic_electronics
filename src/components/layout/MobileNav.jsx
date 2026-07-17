import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function MobileNav({ open, onClose, links }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-display font-bold text-lg text-ink-900">
              OTIC<span className="text-accent">TECH</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-slate-500 hover:text-ink-900 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="px-4 py-3 font-body text-base text-slate-500 hover:text-ink-900 hover:bg-paper-100 rounded-card transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

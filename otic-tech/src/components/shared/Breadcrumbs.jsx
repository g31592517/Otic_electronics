import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-400 mb-6">
      <ol className="flex items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-accent transition-colors duration-150">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

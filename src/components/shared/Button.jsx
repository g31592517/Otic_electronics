import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary:
    "border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent",
  ghost:
    "text-slate-500 hover:text-ink-900 hover:bg-paper-200 focus-visible:ring-accent",
};

export default function Button({ children, variant = "primary", to, className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-sm transition-all duration-150 ease rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

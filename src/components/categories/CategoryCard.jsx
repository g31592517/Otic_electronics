import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group bg-white border border-border rounded-card overflow-hidden hover:border-strong transition-all duration-200"
    >
      <div className="aspect-[16/9] bg-ink-800 overflow-hidden">
        <img
          src={category.image || `https://placehold.co/640x360/EEE/999?text=${encodeURIComponent(category.name)}`}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-semibold text-lg text-ink-900 group-hover:text-accent transition-colors duration-150">
            {category.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all duration-150" />
        </div>
        <p className="font-mono text-xs text-slate-400 mb-3">
          {category.productCount} products
        </p>
        <p className="font-body text-sm text-slate-500 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

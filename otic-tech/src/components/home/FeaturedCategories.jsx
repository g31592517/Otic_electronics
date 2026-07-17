import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categories from "../../data/categories";
import SectionHeading from "../shared/SectionHeading";

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-paper-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10">Shop by Category</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group relative bg-white border border-border rounded-card overflow-hidden p-6 hover:border-strong transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink-900 group-hover:text-accent transition-colors duration-150">
                    {cat.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    {cat.productCount} products
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all duration-150" />
              </div>
              <p className="mt-3 font-body text-sm text-slate-500 leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

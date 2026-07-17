import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import categories from "../../data/categories";
import SectionHeading from "../shared/SectionHeading";

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  const active = categories.find((c) => c.id === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-8">Shop by Category</SectionHeading>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-slate-500 hover:text-ink-900 hover:border-strong transition-all duration-150 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-start shrink-0 w-52 rounded-card border transition-all duration-200 overflow-hidden text-left ${
                  activeCategory === cat.id
                    ? "border-accent bg-accent-light"
                    : "border-border bg-white hover:border-strong"
                }`}
              >
                <div className="aspect-[16/9] bg-paper-100 overflow-hidden">
                  {cat.image && (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className={`font-display font-semibold text-sm ${
                    activeCategory === cat.id ? "text-accent-dark" : "text-ink-900"
                  }`}>
                    {cat.name}
                  </p>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">{cat.productCount} products</p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-slate-500 hover:text-ink-900 hover:border-strong transition-all duration-150 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {active && (
          <div className="mt-6 overflow-hidden transition-all duration-300">
            <div className="border border-border rounded-card p-5 bg-white">
              <p className="font-body text-sm text-slate-500 mb-4">{active.description}</p>
              <div className="flex flex-wrap gap-2">
                {active.subcategories?.map((sub) => (
                  <Link
                    key={sub}
                    to={`/products?category=${active.id}&subcategory=${encodeURIComponent(sub.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="px-3 py-1.5 rounded-full border border-border text-xs font-body text-slate-500 hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-150"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
              <Link
                to={`/products?category=${active.id}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-body font-medium text-accent hover:text-accent-dark transition-colors duration-150"
              >
                Shop All {active.name} &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

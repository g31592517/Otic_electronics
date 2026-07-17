import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import categories from "../data/categories";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => {
      setScrollPos(Math.round(el.scrollLeft / (el.scrollWidth / categories.length)));
    };
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

  const active = categories.find((c) => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>Categories | OTIC TECH</title>
        <meta name="description" content="Browse all product categories at OTIC TECH." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-8">All Categories</SectionHeading>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-start shrink-0 flex items-center gap-3 px-5 py-3 rounded-card border transition-all duration-150 ${
                activeCategory === cat.id
                  ? "border-accent bg-accent-light text-accent-dark"
                  : "border-border bg-white text-slate-500 hover:border-strong"
              }`}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-paper-100 shrink-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <p className="font-body font-medium text-sm whitespace-nowrap">{cat.name}</p>
                <p className="font-mono text-xs text-inherit opacity-60">{cat.productCount} products</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-3 md:hidden">
          {categories.map((cat, i) => (
            <span
              key={cat.id}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === scrollPos ? "bg-accent w-3" : "bg-border"
              }`}
            />
          ))}
        </div>

        {active && (
          <div className="mt-8 overflow-hidden transition-all duration-250">
            <div className="border border-border rounded-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-paper-100 shrink-0">
                  <img src={active.image} alt={active.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-xl text-ink-900">{active.name}</h2>
                  <p className="font-body text-sm text-slate-500 mt-1">{active.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/products?category=${active.id}&subcategory=${encodeURIComponent(sub.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="px-4 py-2 rounded-full border border-border text-sm font-body text-slate-500 hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-150"
                  >
                    {sub}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="primary" to={`/products?category=${active.id}`}>
                  Shop All in {active.name}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

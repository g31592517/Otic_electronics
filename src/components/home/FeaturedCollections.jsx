import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categories from "../../data/categories";
import SectionHeading from "../shared/SectionHeading";

export default function FeaturedCollections() {
  const collectionCategories = [
    { id: "entertainment", name: "Home Entertainment", description: "TVs, soundbars, projectors & streaming" },
    { id: "smart-home", name: "Smart Living", description: "Hubs, cameras, lighting & thermostats" },
    { id: "kitchen-appliances", name: "Kitchen Essentials", description: "Refrigerators, ovens, coffee & more" },
    { id: "computers-components", name: "Gaming & Computing", description: "Laptops, desktops, GPUs & peripherals" },
    { id: "phone-accessories", name: "Mobile Accessories", description: "Earbuds, chargers, cases & power banks" },
    { id: "home-comfort", name: "Home Comfort", description: "ACs, purifiers, heaters & vacuums" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-8">Featured Collections</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionCategories.map((col) => {
            const cat = categories.find((c) => c.id === col.id);
            return (
              <Link
                key={col.id}
                to={`/products?category=${col.id}`}
                className="group relative rounded-card overflow-hidden border border-border bg-white hover:border-strong transition-all duration-200"
              >
                <div className="aspect-[16/9] bg-paper-100 overflow-hidden">
                  {cat?.image && (
                    <img
                      src={cat.image}
                      alt={col.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-ink-900 group-hover:text-accent transition-colors duration-150">
                    {col.name}
                  </h3>
                  <p className="font-body text-sm text-slate-500 mt-1">{col.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-mono text-xs text-slate-400">{cat?.productCount || 0} products</span>
                    <span className="inline-flex items-center gap-1 text-sm font-body font-medium text-accent group-hover:gap-2 transition-all duration-150">
                      Shop Collection <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

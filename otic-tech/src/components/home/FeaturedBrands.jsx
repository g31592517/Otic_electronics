import { Link } from "react-router-dom";
import SectionHeading from "../shared/SectionHeading";

const brands = [
  "Samsung", "Sony", "LG", "Apple", "Dell", "HP", "Lenovo", "ASUS", "Acer",
  "Logitech", "Canon", "Bose", "JBL", "Intel", "AMD", "NVIDIA",
  "Kingston", "Crucial", "Corsair", "TP-Link", "Anker", "Belkin",
];

export default function FeaturedBrands() {
  return (
    <section className="py-12 md:py-16 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="text-center mb-8 text-lg md:text-xl font-semibold">
          Trusted by the World's Leading Brands
        </SectionHeading>
        <p className="text-center text-sm text-slate-500 mb-8 max-w-xl mx-auto">
          We partner with the most trusted names in electronics to bring you authentic products backed by full manufacturer warranties.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <Link
              key={brand}
              to={`/products?brand=${encodeURIComponent(brand)}`}
              className="group"
            >
              <div className="h-10 px-5 bg-white border border-border rounded-lg flex items-center justify-center font-display font-semibold text-sm text-slate-400 grayscale hover:grayscale-0 hover:text-accent hover:border-accent/30 transition-all duration-200">
                {brand}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

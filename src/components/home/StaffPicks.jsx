import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../shared/SectionHeading";

const staffPicks = products.filter((p) => p.rating >= 4.6).slice(0, 6);

export default function StaffPicks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-8">Staff Picks</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

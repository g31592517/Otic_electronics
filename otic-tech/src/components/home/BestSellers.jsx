import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../shared/SectionHeading";

const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);

export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10">Best Sellers</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

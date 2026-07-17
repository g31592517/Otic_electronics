import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../shared/SectionHeading";

const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 8);

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10">New Arrivals</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

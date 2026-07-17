import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../shared/SectionHeading";

const featured = products.slice(0, 8);

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading>Featured Products</SectionHeading>
          <Link
            to="/products"
            className="font-body font-medium text-sm text-accent hover:text-accent-dark transition-colors duration-150"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

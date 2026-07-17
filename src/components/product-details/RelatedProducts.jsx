import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../shared/SectionHeading";

export default function RelatedProducts({ category, currentId }) {
  const related = products
    .filter((p) => p.category === category && p.id !== currentId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-12 border-t border-border">
      <SectionHeading className="mb-6">Related Products</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

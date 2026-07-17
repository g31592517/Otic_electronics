import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, MessageCircle } from "lucide-react";
import products from "../data/products";
import categories from "../data/categories";
import formatCurrency from "../utils/formatCurrency";
import ImageGallery from "../components/product-details/ImageGallery";
import SpecsTable from "../components/product-details/SpecsTable";
import FeaturesList from "../components/product-details/FeaturesList";
import ReviewsSection from "../components/product-details/ReviewsSection";
import RelatedProducts from "../components/product-details/RelatedProducts";
import RatingStars from "../components/products/RatingStars";
import StockBadge from "../components/products/StockBadge";
import Button from "../components/shared/Button";
import Breadcrumbs from "../components/shared/Breadcrumbs";
import NotFound from "./NotFound";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return <NotFound />;

  const category = categories.find((c) => c.id === product.category);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: category?.name || "Products", to: `/products?category=${product.category}` },
    { label: product.name },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>{product.name} | OTIC TECH</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ImageGallery images={product.images} name={product.name} />

          <div>
            <p className="font-mono text-xs text-slate-400 mb-1 uppercase tracking-wider">
              {product.brand}
            </p>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-ink-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <RatingStars rating={product.rating} size={16} />
              <span className="font-mono text-sm text-slate-500">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-mono font-semibold text-3xl text-ink-900">
                {product.discountPrice
                  ? formatCurrency(product.discountPrice)
                  : formatCurrency(product.price)}
              </span>
              {product.discountPrice && (
                <span className="font-mono text-base text-slate-400 line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>

            <div className="mt-4">
              <StockBadge stock={product.stock} />
            </div>

            <p className="mt-6 font-body text-sm text-slate-500 leading-relaxed">
              {product.shortDescription}
            </p>

            {product.stock !== "out-of-stock" && (
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center border border-border rounded-card">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="p-3 text-slate-500 hover:text-ink-900 hover:bg-paper-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-mono text-sm text-ink-900 min-w-[3ch] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="p-3 text-slate-500 hover:text-ink-900 hover:bg-paper-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  variant="primary"
                  className="flex-1 px-8 py-3.5"
                  onClick={() => {
                    addItem({
                      productId: product.id,
                      name: product.name,
                      price: product.discountPrice || product.price,
                      image: product.images?.[0] || "",
                      quantity,
                    });
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            )}

            <div className="mt-4">
              <Button
                variant="ghost"
                to={`/contact?product=${product.id}`}
                className="text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Contact About This Product
              </Button>
            </div>

            <p className="mt-4 font-mono text-xs text-slate-400">
              SKU: {product.sku}
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="font-display font-semibold text-base text-ink-900 mb-4">
                Key Features
              </h2>
              <FeaturesList features={product.keyFeatures} />
            </div>
          </div>
        </div>

        <section className="mt-12 pt-12 border-t border-border">
          <h2 className="font-display font-semibold text-xl text-ink-900 mb-6">
            Specifications
          </h2>
          <SpecsTable specifications={product.specifications} />
        </section>

        <section className="mt-12 pt-12 border-t border-border">
          <h2 className="font-display font-semibold text-xl text-ink-900 mb-6">
            Customer Reviews
          </h2>
          <ReviewsSection rating={product.rating} reviewCount={product.reviewCount} />
        </section>

        <RelatedProducts category={product.category} currentId={product.id} />
      </div>
    </main>
  );
}

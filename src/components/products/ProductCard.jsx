import { Link } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import formatRating from "../../utils/formatRating";
import RatingStars from "./RatingStars";
import StockBadge from "./StockBadge";

export default function ProductCard({ product }) {
  const { id, name, brand, price, discountPrice, shortDescription, rating, reviewCount, stock, isBestSeller, isNewArrival } = product;

  return (
    <Link
      to={`/products/${id}`}
      className="group bg-paper-50 rounded-card overflow-hidden border border-border hover:shadow-cardHover transition-all duration-200 flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-paper-100 overflow-hidden">
        <img
          src={product.images?.[0] || `https://placehold.co/600x450/EEE/999?text=${encodeURIComponent(name)}`}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isBestSeller && (
          <span className="absolute top-3 left-3 bg-accent text-white font-mono text-[10px] font-medium px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
        {isNewArrival && (
          <span className="absolute top-3 right-3 bg-signal-success text-white font-mono text-[10px] font-medium px-2 py-1 rounded-full">
            New
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="font-mono text-xs text-slate-400 mb-1">{brand}</p>
        <h3 className="font-display font-semibold text-sm text-ink-900 group-hover:text-accent transition-colors duration-150 line-clamp-2">
          {name}
        </h3>
        <p className="mt-1 font-body text-xs text-slate-500 line-clamp-2 leading-relaxed flex-1">
          {shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <RatingStars rating={rating} size={12} />
          <span className="font-mono text-xs text-slate-400">
            {formatRating(rating)} ({reviewCount})
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono font-medium text-base text-ink-900">
              {discountPrice ? formatCurrency(discountPrice) : formatCurrency(price)}
            </span>
            {discountPrice && (
              <span className="font-mono text-xs text-slate-400 line-through">
                {formatCurrency(price)}
              </span>
            )}
          </div>
          <StockBadge stock={stock} />
        </div>
      </div>
    </Link>
  );
}

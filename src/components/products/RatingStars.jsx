import { Star, StarHalf } from "lucide-react";

export default function RatingStars({ rating = 0, size = 14 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) {
          return <Star key={i} size={size} className="fill-signal-warning text-signal-warning" />;
        }
        if (i === full && half) {
          return <StarHalf key={i} size={size} className="fill-signal-warning text-signal-warning" />;
        }
        return <Star key={i} size={size} className="text-paper-200" />;
      })}
    </div>
  );
}

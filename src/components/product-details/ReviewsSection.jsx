import RatingStars from "../products/RatingStars";

const mockReviews = [
  { name: "Alex K.", rating: 5, date: "2026-06-15", comment: "Exceeded expectations. The build quality is outstanding and delivery was two days ahead of schedule." },
  { name: "Jordan M.", rating: 4, date: "2026-06-02", comment: "Great product overall. Would have liked more documentation in the box, but online resources covered everything." },
  { name: "Riley P.", rating: 5, date: "2026-05-20", comment: "Third purchase from OTIC TECH and they never miss. Packaged perfectly, works flawlessly." },
  { name: "Casey L.", rating: 4, date: "2026-05-08", comment: "Solid product for the price point. Customer support was very helpful with a setup question." },
];

export default function ReviewsSection({ rating, reviewCount }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <RatingStars rating={rating} size={18} />
        <span className="font-mono text-sm text-ink-900 font-medium">{rating.toFixed(1)}</span>
        <span className="font-body text-sm text-slate-400">({reviewCount} reviews)</span>
      </div>

      <div className="space-y-5">
        {mockReviews.map((review, i) => (
          <div key={i} className="pb-5 border-b border-paper-200 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="font-display font-semibold text-sm text-ink-900">{review.name}</span>
              <span className="font-mono text-xs text-slate-400">{review.date}</span>
            </div>
            <RatingStars rating={review.rating} size={12} />
            <p className="mt-2 font-body text-sm text-slate-500 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

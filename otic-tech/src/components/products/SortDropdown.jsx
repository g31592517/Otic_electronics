export default function SortDropdown({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="px-4 py-2.5 rounded-card border border-border font-body text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <option value="newest">Newest</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="bestselling">Best Selling</option>
      <option value="rating">Highest Rated</option>
    </select>
  );
}

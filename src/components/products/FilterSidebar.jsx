import categories from "../../data/categories";
import brands from "../../data/brands";
import Button from "../shared/Button";

export default function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedBrands,
  toggleBrand,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  minRating,
  setMinRating,
  clearFilters,
}) {
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="font-display font-semibold text-sm text-ink-900 uppercase tracking-wider mb-4">
          Category 
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="font-body text-sm text-slate-500 group-hover:text-ink-900 transition-colors duration-150">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-semibold text-sm text-ink-900 uppercase tracking-wider mb-4">
          Brand
        </h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label
              key={brand.name}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => toggleBrand(brand.name)}
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="font-body text-sm text-slate-500 group-hover:text-ink-900 transition-colors duration-150">
                {brand.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-semibold text-sm text-ink-900 uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: Number(e.target.value) }))}
            className="w-full px-3 py-2 rounded-card border border-border font-mono text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Min"
            min={1000}
          />
          <span className="text-slate-400">&ndash;</span>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: Number(e.target.value) }))}
            className="w-full px-3 py-2 rounded-card border border-border font-mono text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Max"
            max={30000}
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="font-body text-sm text-slate-500 group-hover:text-ink-900 transition-colors duration-150">
            In Stock Only
          </span>
        </label>
      </div>

      <div>
        <h3 className="font-display font-semibold text-sm text-ink-900 uppercase tracking-wider mb-4">
          Minimum Rating
        </h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="rating"
                checked={minRating === stars}
                onChange={() => setMinRating(stars)}
                className="w-4 h-4 border-border text-accent focus:ring-accent"
              />
              <span className="font-body text-sm text-slate-500 group-hover:text-ink-900 transition-colors duration-150">
                {stars} ★ &amp; up
              </span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
                className="w-4 h-4 border-border text-accent focus:ring-accent"
              />
              <span className="font-body text-sm text-slate-500 group-hover:text-ink-900 transition-colors duration-150">
                Any Rating
            </span>
          </label>
        </div>
      </div>

      <Button variant="ghost" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </aside>
  );
}

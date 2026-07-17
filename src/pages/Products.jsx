import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import useProductFilters from "../hooks/useProductFilters";
import useDebounce from "../hooks/useDebounce";
import ProductGrid from "../components/products/ProductGrid";
import FilterSidebar from "../components/products/FilterSidebar";
import SortDropdown from "../components/products/SortDropdown";
import SearchBar from "../components/products/SearchBar";
import Pagination from "../components/products/Pagination";
import EmptyState from "../components/shared/EmptyState";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filters = useProductFilters();

  const debouncedSearch = useDebounce(filters.search, 300);

  const displayedProducts =
    debouncedSearch !== filters.search
      ? []
      : filters.paginatedProducts;

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>Products | OTIC TECH</title>
        <meta name="description" content="Browse our full catalog of premium electronics." />
      </Helmet>

      <SearchBar
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        search={filters.search}
        setSearch={filters.setSearch}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-ink-900">
              Products
            </h1>
            <p className="font-body text-sm text-slate-500 mt-1">
              {filters.filteredProducts.length} product{filters.filteredProducts.length !== 1 && "s"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SortDropdown sort={filters.sort} setSort={filters.setSort} />
            <button
              onClick={() => setMobileFilters(true)}
              className="lg:hidden p-2.5 rounded-card border border-border text-slate-500 hover:text-ink-900 hover:bg-paper-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open filters"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterSidebar {...filters} />
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {filters.filteredProducts.length === 0 ? (
              <EmptyState
                title="No products match your filters"
                message="Try adjusting your search or filter criteria."
                onClear={filters.clearFilters}
              />
            ) : (
              <>
                <ProductGrid products={displayedProducts} />
                <Pagination
                  currentPage={filters.currentPage}
                  totalPages={filters.totalPages}
                  setCurrentPage={filters.setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-lg text-ink-900">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                aria-label="Close filters"
                className="p-2 text-slate-400 hover:text-ink-900 transition-colors duration-150"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar {...filters} />
          </div>
        </div>
      )}
    </main>
  );
}

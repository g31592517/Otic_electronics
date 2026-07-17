import { useState, useMemo, useCallback } from "react";
import products from "../data/products";

const ITEMS_PER_PAGE = 12;

export default function useProductFilters() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 1000, max: 30000 });
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = useCallback((cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  }, []);

  const toggleBrand = useCallback((brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange({ min: 1000, max: 30000 });
    setInStockOnly(false);
    setMinRating(0);
    setSort("newest");
    setCurrentPage(1);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    result = result.filter(
      (p) =>
        (p.discountPrice || p.price) >= priceRange.min &&
        (p.discountPrice || p.price) <= priceRange.max
    );

    if (inStockOnly) {
      result = result.filter((p) => p.stock !== "out-of-stock");
    }

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case "price-high":
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "bestselling":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
      default:
        break;
    }

    return result;
  }, [search, selectedCategories, selectedBrands, priceRange, inStockOnly, minRating, sort]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return {
    search,
    setSearch,
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
    sort,
    setSort,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredProducts,
    paginatedProducts,
    clearFilters,
  };
}

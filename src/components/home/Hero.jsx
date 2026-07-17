import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../shared/Button";

const slides = [
  {
    id: "entertainment",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1920&q=80",
    headline: "Everything Electronics. One Trusted Store.",
    text: "Explore over 50 carefully selected products across entertainment, smart home, kitchen, computing, home comfort, and mobile accessories. Nationwide shipping, competitive pricing, and manufacturer-backed warranties.",
    category: "entertainment",
  },
  {
    id: "smart-home",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1920&q=80",
    headline: "Make Your Home Smarter.",
    text: "From smart speakers and security cameras to intelligent lighting and thermostats — build a connected home that works for you.",
    category: "smart-home",
  },
  {
    id: "kitchen-appliances",
    image: "https://images.unsplash.com/photo-1774294532460-d4d901ae38a5?auto=format&fit=crop&w=1920&q=80",
    headline: "Upgrade Your Kitchen.",
    text: "Premium refrigerators, coffee machines, air fryers, and more — designed for the modern home chef.",
    category: "kitchen-appliances",
  },
  {
    id: "home-comfort",
    image: "https://images.unsplash.com/photo-1606421753414-8d165c9d48e5?auto=format&fit=crop&w=1920&q=80",
    headline: "Comfort for Every Season.",
    text: "Air conditioners, purifiers, heaters, and vacuums — keep your home comfortable year-round with top-tier appliances.",
    category: "home-comfort",
  },
  {
    id: "computers-components",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1920&q=80",
    headline: "Power Your Productivity.",
    text: "Laptops, desktop PCs, graphics cards, SSDs, and gaming peripherals — everything you need for work and play.",
    category: "computers-components",
  },
  {
    id: "phone-accessories",
    image: "https://images.unsplash.com/photo-1770292170233-5d9e235ec739?auto=format&fit=crop&w=1920&q=80",
    headline: "Accessorize Your Mobile Life.",
    text: "Premium earbuds, chargers, cases, power banks, and wireless charging solutions for every device.",
    category: "phone-accessories",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [startInterval, stopInterval]);

  const goTo = (index) => {
    setCurrent(index);
    startInterval();
  };

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startInterval();
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    startInterval();
  };

  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section
      className="relative w-full px-4 md:px-8"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full min-h-[55vh] md:min-h-[65vh] overflow-hidden rounded-2xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-3">
                {slide.id.replace(/-/g, " ")}
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-2xl">
                {slide.headline}
              </h2>
              <p className="mt-4 font-body text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                {slide.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  to={`/products?category=${slide.category}`}
                  className="px-8 py-4 text-base"
                >
                  Shop Now
                </Button>
                <Button
                  variant="secondary"
                  to={`/products?category=${slide.category}`}
                  className="px-8 py-4 text-base border-white text-white hover:bg-white hover:text-black"
                >
                  Browse Category
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 text-white backdrop-blur-sm flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 text-white backdrop-blur-sm flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </section>
  );
}

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery({ images = [], name }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-[4/3] bg-paper-100 rounded-card border border-border relative overflow-hidden">
        <img
          src={images[index] || `https://placehold.co/800x600/EEE/999?text=${encodeURIComponent(name)}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                i === index ? "border-accent" : "border-transparent"
              }`}
            >
              <img
                src={images[i] || `https://placehold.co/160x120/EEE/999?text=${i + 1}`}
                alt={`${name} thumbnail ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

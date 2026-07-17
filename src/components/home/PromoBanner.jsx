import { Truck } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-paper-100 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5">
        <div className="flex items-center justify-center gap-3 font-body text-sm md:text-base text-ink-800">
          <Truck className="w-5 h-5 text-accent shrink-0" />
          <span>
            <strong className="font-semibold">Free standard shipping</strong> on all orders over $500 — nationwide delivery in 3–7 business days
          </span>
        </div>
      </div>
    </div>
  );
}

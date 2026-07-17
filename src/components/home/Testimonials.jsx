import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonials from "../../data/testimonials";
import SectionHeading from "../shared/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="text-center mb-10">What Our Customers Say</SectionHeading>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }, (_, i) => (
              <Star key={i} className="w-5 h-5 fill-signal-warning text-signal-warning" />
            ))}
          </div>
          <blockquote className="font-body text-lg text-ink-900 leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-3">
            <span className="font-display font-semibold text-accent text-sm">
              {t.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          <p className="font-display font-semibold text-sm text-ink-900">{t.name}</p>
          <p className="font-mono text-xs text-slate-400">{t.location}</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} aria-label="Previous testimonial" className="p-2 rounded-full border border-border text-slate-400 hover:text-ink-900 hover:border-strong transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-accent w-4" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="p-2 rounded-full border border-border text-slate-400 hover:text-ink-900 hover:border-strong transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

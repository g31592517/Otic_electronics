import { Truck, ShieldCheck, RotateCcw, Award, MapPin, Headphones } from "lucide-react";

const services = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $500" },
  { icon: ShieldCheck, title: "Secure Checkout", desc: "SSL encrypted payments" },
  { icon: RotateCcw, title: "30-Day Returns", desc: "No hassle, full refund" },
  { icon: Award, title: "Manufacturer Warranty", desc: "Minimum 2-year coverage" },
  { icon: MapPin, title: "Nationwide Delivery", desc: "Shipping across the US" },
  { icon: Headphones, title: "Expert Support", desc: "Real people, real answers" },
];

export default function TrustServices() {
  return (
    <section className="py-12 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="font-display font-semibold text-sm text-ink-900">{s.title}</p>
              <p className="font-body text-xs text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Shield, Truck, Award, Headphones } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const features = [
  {
    icon: Shield,
    title: "Trusted Retailer",
    desc: "Authorized dealer for every brand we carry. 100% authentic products with full manufacturer warranties.",
  },
  {
    icon: Truck,
    title: "Fast Nationwide Shipping",
    desc: "Free standard shipping on orders over $500. Expedited and freight options available at checkout.",
  },
  {
    icon: Award,
    title: "2-Year Warranty",
    desc: "All products come with a minimum 2-year limited warranty. Extended protection plans available.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Knowledgeable product specialists available via phone, email, and chat. We know our catalog inside out.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-paper-100 text-ink-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="text-ink-900 mb-10">Why Choose OTIC TECH</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-200">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="font-body text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

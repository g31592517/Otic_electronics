import { Helmet } from "react-helmet-async";
import { Shield, Target, Eye, Heart } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

const values = [
  {
    icon: Shield,
    title: "Trust Above All",
    desc: "Every product we sell is 100% genuine and backed by comprehensive warranties. We only partner with authorized distributors.",
  },
  {
    icon: Target,
    title: "Technical Precision",
    desc: "We obsess over specifications because our customers do. Every product page includes detailed, accurate technical data.",
  },
  {
    icon: Eye,
    title: "Curated Excellence",
    desc: "We don't stock everything — we carefully select each product for quality, value, and performance in its category.",
  },
  {
    icon: Heart,
    title: "Customer-First Service",
    desc: "Our support team is staffed by product experts, not script readers. We resolve issues, not deflect them.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>About Us | OTIC TECH</title>
        <meta name="description" content="Learn about OTIC TECH — our story, mission, vision, and values." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <section className="max-w-3xl mb-16">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-900 mb-6">
            About OTIC TECH
          </h1>
          <div className="prose font-body text-slate-500 space-y-4">
            <p className="leading-relaxed">
              Founded in Houston, Texas, OTIC TECH was built on a simple premise: premium electronics
              deserve a premium retail experience. Too many high-end components and appliances are sold
              through generic storefronts that treat a $10,000 home theater system the same as a $20 cable.
              We set out to change that.
            </p>
            <p className="leading-relaxed">
              Our team is composed of engineers, audiophiles, home automation specialists, and tech
              enthusiasts who personally vet every product we carry. We don't just list specifications —
              we understand them, and we make sure the information you need to make an informed decision
              is front and center.
            </p>
            <p className="leading-relaxed">
              From OLED televisions and high-fidelity audio to smart home ecosystems and custom
              workstations, OTIC TECH offers a curated selection of products that meet our standards
              for performance, build quality, and reliability. Every order is packed with care and
              shipped with full insurance, because we know what&apos;s in that box matters.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading className="mb-8">Our Mission</SectionHeading>
          <div className="bg-paper-100 rounded-card p-6 md:p-8">
            <p className="font-body text-base text-ink-800 leading-relaxed max-w-3xl">
              To make premium technology accessible and understandable for everyone who values quality.
              We believe that buying high-end electronics should be an informed, confident decision —
              not a gamble. We&apos;re here to provide the expertise, selection, and support that
              sophisticated buyers deserve.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading className="mb-8">Our Vision</SectionHeading>
          <div className="bg-paper-100 rounded-card p-6 md:p-8">
            <p className="font-body text-base text-ink-800 leading-relaxed max-w-3xl">
              To become the most trusted destination for premium electronics in the United States —
              known not just for what we sell, but for how we sell it. We&apos;re building a future
              where technical excellence and exceptional customer experience are inseparable.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading className="mb-8">Our Values</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-paper-100 rounded-card p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-base text-ink-900 mb-2">{v.title}</h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading className="mb-8">Why Buy From Us</SectionHeading>
          <div className="bg-paper-100 rounded-card p-6 md:p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: "Authorized Dealer", desc: "Every product is sourced directly from manufacturers or authorized distributors." },
                { title: "Detailed Specifications", desc: "Full technical specs, dimensions, power requirements, and compatibility info on every product page." },
                { title: "2-Year Minimum Warranty", desc: "All products include at least 2 years of manufacturer warranty coverage." },
                { title: "Expert Support", desc: "Product specialists available by phone, email, and live chat with real technical knowledge." },
                { title: "Free Shipping Over $500", desc: "Standard shipping is free across the contiguous US on orders over $500." },
                { title: "30-Day Returns", desc: "Simple, hassle-free returns within 30 days of delivery on all in-stock items." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-sm text-ink-900">{item.title}</p>
                    <p className="font-body text-sm text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

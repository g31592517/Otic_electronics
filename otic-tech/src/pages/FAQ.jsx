import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import faqs from "../data/faqs";
import SectionHeading from "../components/shared/SectionHeading";

function AccordionGroup({ topic, questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-ink-900 mb-4">{topic}</h2>
      <div className="space-y-2">
        {questions.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-card border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-body text-sm font-medium text-ink-900 hover:bg-paper-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              aria-expanded={openIndex === i}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-150 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4">
                <p className="font-body text-sm text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>FAQ | OTIC TECH</title>
        <meta name="description" content="Frequently asked questions about shipping, returns, warranty, payments, and more at OTIC TECH." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10">Frequently Asked Questions</SectionHeading>
        <div className="space-y-10">
          {faqs.map((group) => (
            <AccordionGroup key={group.topic} {...group} />
          ))}
        </div>
      </div>
    </main>
  );
}

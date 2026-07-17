import { Check } from "lucide-react";

export default function FeaturesList({ features = [] }) {
  return (
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-5 h-5 mt-0.5 rounded-full bg-signal-success/10 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-signal-success" />
          </span>
          <span className="font-body text-sm text-ink-800 leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

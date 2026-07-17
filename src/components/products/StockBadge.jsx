const labels = {
  "in-stock": { text: "In Stock", class: "text-signal-success bg-signal-success/10" },
  "low-stock": { text: "Low Stock", class: "text-signal-warning bg-signal-warning/10" },
  "out-of-stock": { text: "Out of Stock", class: "text-signal-danger bg-signal-danger/10" },
};

export default function StockBadge({ stock }) {
  const info = labels[stock] || labels["out-of-stock"];
  return (
    <span
      className={`inline-block font-mono text-xs font-medium px-2.5 py-1 rounded-full ${info.class}`}
    >
      {info.text}
    </span>
  );
}

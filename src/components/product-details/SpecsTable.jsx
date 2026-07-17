export default function SpecsTable({ specifications }) {
  if (!specifications) return null;

  return (
    <div className="overflow-hidden rounded-card border border-border">
      <table className="w-full">
        <tbody>
          {Object.entries(specifications).map(([key, value], i) => (
            <tr
              key={key}
              className={`${i % 2 === 0 ? "bg-white" : "bg-paper-100"}`}
            >
              <td className="px-4 py-3 font-mono text-xs text-slate-500 font-medium uppercase tracking-wider w-1/3">
                {key}
              </td>
              <td className="px-4 py-3 font-body text-sm text-ink-900">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

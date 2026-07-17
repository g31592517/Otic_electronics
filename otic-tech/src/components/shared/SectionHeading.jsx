export default function SectionHeading({ children, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={`font-display font-bold text-2xl md:text-3xl text-ink-900 ${className}`}>
      {children}
    </Tag>
  );
}

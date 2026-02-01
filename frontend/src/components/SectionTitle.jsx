export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        {subtitle}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

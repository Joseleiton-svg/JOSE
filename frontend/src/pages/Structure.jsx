import SectionTitle from "../components/SectionTitle";
import { gallery } from "../data/mockData";

export default function Structure() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="Estrutura" subtitle="Ambientes planejados" />
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map((space) => (
            <div key={space.title} className="card p-6">
              <div className="h-32 w-full rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{space.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{space.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

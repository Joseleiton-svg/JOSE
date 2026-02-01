import SectionTitle from "../components/SectionTitle";
import { team } from "../data/mockData";

export default function Team() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="Equipe" subtitle="Profissionais dedicados" />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card p-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

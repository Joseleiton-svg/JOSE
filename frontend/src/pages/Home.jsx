import SectionTitle from "../components/SectionTitle";
import { highlights, schoolInfo } from "../data/mockData";

export default function Home() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Educação infantil & Fundamental I
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
              {schoolInfo.name}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Um espaço seguro, acolhedor e inovador para crianças aprenderem com alegria, criando
              vínculos e construindo conhecimento.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn btn-primary" href="/matricula">
                Agendar matrícula
              </a>
              <a className="btn btn-outline" href="/portal/login">
                Acessar portal
              </a>
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-primary">24h</p>
                <p className="text-sm text-slate-500">Diário digital</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary">15+</p>
                <p className="text-sm text-slate-500">Projetos pedagógicos</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary">100%</p>
                <p className="text-sm text-slate-500">Acolhimento</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Tour virtual</h3>
              <p className="mt-3 text-sm text-slate-600">
                Conheça nossos ambientes e veja como estimulamos criatividade e autonomia.
              </p>
              <button className="btn btn-secondary mt-6">Agendar visita</button>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Calendário escolar</h3>
              <p className="mt-3 text-sm text-slate-600">
                Eventos atualizados semanalmente com avisos e comunicados importantes.
              </p>
              <button className="btn btn-outline mt-6">Ver calendário</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto w-full max-w-6xl">
          <SectionTitle title="Por que as famílias confiam na Primeiros Passos" subtitle="Diferenciais" />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import SectionTitle from "../components/SectionTitle";
import { classes } from "../data/mockData";

export default function Teaching() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="Ensino" subtitle="Pré-escola & Fundamental I" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-slate-600">
            <p>
              Da educação infantil ao 5º ano, acompanhamos cada etapa do desenvolvimento com
              metodologias ativas, alfabetização consciente e projetos que conectam teoria e prática.
            </p>
            <p>
              Na educação infantil, priorizamos brincadeiras dirigidas, coordenação motora, linguagem
              oral e estímulos sensoriais. No fundamental I, fortalecemos a leitura, escrita,
              matemática e pensamento crítico.
            </p>
            <p>
              O acompanhamento é contínuo, com devolutivas no portal digital e encontros regulares
              com as famílias.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Turmas atendidas</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              {classes.map((item) => (
                <li key={item} className="rounded-full bg-slate-100 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "../components/SectionTitle";

export default function School() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="A Escola" subtitle="Nossa essência" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-slate-600">
            <p>
              A Escola Infantil e Fundamental Primeiros Passos acredita que cada criança aprende
              melhor quando se sente segura, respeitada e estimulada. Nosso projeto pedagógico une
              bases acadêmicas sólidas com desenvolvimento socioemocional e participação ativa das
              famílias.
            </p>
            <p>
              Trabalhamos com projetos interdisciplinares, práticas lúdicas e acompanhamento
              individualizado, garantindo que cada etapa do ensino seja vivida com alegria e
              propósito.
            </p>
            <p>
              O nosso portal digital mantém você sempre por perto, com diário escolar, comunicados e
              informações importantes sobre a rotina dos alunos.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Valores</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✔ Afeto e respeito à infância</li>
              <li>✔ Excelência pedagógica</li>
              <li>✔ Comunicação transparente</li>
              <li>✔ Segurança e bem-estar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "../components/SectionTitle";

export default function Enrollment() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="Matrícula" subtitle="Vamos conversar" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="card space-y-4 p-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Nome do responsável</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Nome do aluno</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Telefone</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Mensagem</label>
              <textarea className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" rows="4" />
            </div>
            <button type="button" className="btn btn-primary w-full">
              Enviar interesse
            </button>
          </form>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Etapas da matrícula</h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li>1. Agendamento de visita presencial ou virtual.</li>
              <li>2. Conversa com coordenação pedagógica.</li>
              <li>3. Envio de documentos e confirmação de vaga.</li>
              <li>4. Acesso ao portal da família.</li>
            </ol>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Atendimento de segunda a sexta, das 7h às 18h.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

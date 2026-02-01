import PortalLayout from "../layouts/PortalLayout";

export default function TeacherDashboard({ onLogout }) {
  return (
    <PortalLayout title="Painel do Professor" onLogout={onLogout}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card space-y-4 p-6">
          <h3 className="text-lg font-semibold text-ink">Postar diário escolar</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Data</label>
              <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Turma</label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>Selecione</option>
                <option>1º Ano</option>
                <option>2º Ano</option>
                <option>3º Ano</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Aluno (opcional)</label>
            <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Texto do professor</label>
            <textarea className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" rows="4" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Upload de fotos</label>
              <input type="file" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Arquivo PDF</label>
              <input type="file" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
          </div>
          <button className="btn btn-primary">Salvar diário</button>
        </div>
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Minhas turmas</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center justify-between">
                <span>2º Ano</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">28 alunos</span>
              </li>
              <li className="flex items-center justify-between">
                <span>3º Ano</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">25 alunos</span>
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Comunicados rápidos</h3>
            <textarea className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3" rows="3" />
            <button className="btn btn-secondary mt-4">Enviar comunicado</button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

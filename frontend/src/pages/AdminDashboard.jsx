import PortalLayout from "../layouts/PortalLayout";

const tasks = [
  "Criar turmas",
  "Cadastrar alunos",
  "Vincular pais",
  "Criar professores",
  "Postar diário escolar",
  "Postar comunicados",
  "Subir fotos",
  "Ver todos os registros"
];

export default function AdminDashboard({ onLogout }) {
  return (
    <PortalLayout title="Painel da Direção" onLogout={onLogout}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card space-y-4 p-6">
          <h3 className="text-lg font-semibold text-ink">Atalhos rápidos</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {tasks.map((task) => (
              <div key={task} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
                {task}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Resumo geral</h3>
            <div className="mt-4 grid gap-4 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Turmas ativas</span>
                <span className="font-semibold text-ink">8</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Professores</span>
                <span className="font-semibold text-ink">12</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Alunos</span>
                <span className="font-semibold text-ink">210</span>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Painel de comunicados</h3>
            <p className="mt-3 text-sm text-slate-600">
              Crie comunicados e programe envios para turmas específicas ou toda a escola.
            </p>
            <button className="btn btn-secondary mt-6">Criar comunicado</button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

import PortalLayout from "../layouts/PortalLayout";
import { announcements, calendarEvents, diaryEntries, students } from "../data/mockData";

export default function ParentDashboard({ user, onLogout }) {
  const student = students.find((item) => item.id === user?.studentId) || students[0];

  return (
    <PortalLayout title="Portal da Família" onLogout={onLogout}>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Dados do aluno</h3>
            <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-ink">Nome</p>
                <p>{student.name}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Turma</p>
                <p>{student.className}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Responsável</p>
                <p>{student.guardian}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <p>{student.email}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink">Diário escolar digital</h3>
              <a className="text-sm font-semibold text-primary" href="/portal/diario">
                Ver histórico
              </a>
            </div>
            <div className="mt-4 space-y-4">
              {diaryEntries.map((entry) => (
                <div key={entry.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-ink">{entry.date}</p>
                    <p className="text-xs text-slate-500">{entry.createdBy}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{entry.text}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-100 px-3 py-1">{entry.className}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">{entry.student}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Comunicados</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              {announcements.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.date}</p>
                  <p className="mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Calendário escolar</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {calendarEvents.map((item) => (
                <li key={item.title} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

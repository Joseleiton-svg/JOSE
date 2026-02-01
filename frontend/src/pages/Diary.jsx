import PortalLayout from "../layouts/PortalLayout";
import { diaryEntries } from "../data/mockData";

export default function Diary({ onLogout }) {
  return (
    <PortalLayout title="Diário escolar digital" onLogout={onLogout}>
      <div className="space-y-6">
        {diaryEntries.map((entry) => (
          <div key={entry.id} className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-ink">{entry.date}</p>
                <p className="text-xs text-slate-400">{entry.createdBy}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">{entry.className}</span>
                {entry.student && (
                  <span className="rounded-full bg-slate-100 px-3 py-1">{entry.student}</span>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">{entry.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.photos.map((photo, index) => (
                <div
                  key={`${entry.id}-photo-${index}`}
                  className="h-20 w-28 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent"
                />
              ))}
            </div>
            {entry.attachments.length > 0 && (
              <div className="mt-4 text-sm text-primary">
                <p className="font-semibold">Arquivos</p>
                <ul className="mt-2 space-y-1 text-slate-600">
                  {entry.attachments.map((file) => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </PortalLayout>
  );
}

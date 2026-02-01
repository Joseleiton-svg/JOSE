import { Link } from "react-router-dom";
import { schoolInfo } from "../data/mockData";

export default function PortalLayout({ title, children, onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portal</p>
            <p className="text-lg font-semibold text-ink">{schoolInfo.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="btn btn-outline">
              Site público
            </Link>
            {onLogout && (
              <button type="button" onClick={onLogout} className="btn btn-primary">
                Sair
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-ink">{title}</h1>
        </div>
        {children}
      </main>
    </div>
  );
}

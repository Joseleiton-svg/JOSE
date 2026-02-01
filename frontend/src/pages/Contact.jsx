import SectionTitle from "../components/SectionTitle";
import { schoolInfo } from "../data/mockData";

export default function Contact() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle title="Contato" subtitle="Fale com a escola" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="card space-y-4 p-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Nome</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Mensagem</label>
              <textarea className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" rows="4" />
            </div>
            <button type="button" className="btn btn-secondary w-full">
              Enviar mensagem
            </button>
          </form>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Informações</h3>
              <p className="mt-3 text-sm text-slate-600">Cidade: {schoolInfo.city}</p>
              <p className="mt-2 text-sm text-slate-600">WhatsApp: {schoolInfo.whatsapp}</p>
              <p className="mt-2 text-sm text-slate-600">Email: contato@primeirospassos.com</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Mapa</h3>
              <div className="mt-4 h-48 w-full rounded-2xl bg-slate-100" />
              <p className="mt-3 text-sm text-slate-600">
                Insira aqui o endereço completo e mapa incorporado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { schoolInfo } from "../data/mockData";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold text-ink">{schoolInfo.name}</p>
            <p className="mt-3 text-sm text-slate-600">
              Educação infantil e fundamental I com foco em acolhimento, excelência pedagógica e
              parceria com as famílias.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/a-escola" className="hover:text-primary">
                  A Escola
                </Link>
              </li>
              <li>
                <Link to="/ensino" className="hover:text-primary">
                  Ensino
                </Link>
              </li>
              <li>
                <Link to="/estrutura" className="hover:text-primary">
                  Estrutura
                </Link>
              </li>
              <li>
                <Link to="/matricula" className="hover:text-primary">
                  Matrícula
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Contato</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>{schoolInfo.city}</li>
              <li>WhatsApp: {schoolInfo.whatsapp}</li>
              <li>contato@primeirospassos.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
          © 2024 {schoolInfo.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

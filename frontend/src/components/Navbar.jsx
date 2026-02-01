import { Link, NavLink } from "react-router-dom";
import { schoolInfo } from "../data/mockData";

const navItems = [
  { label: "Home", to: "/" },
  { label: "A Escola", to: "/a-escola" },
  { label: "Ensino", to: "/ensino" },
  { label: "Estrutura", to: "/estrutura" },
  { label: "Equipe", to: "/equipe" },
  { label: "Matrícula", to: "/matricula" },
  { label: "Contato", to: "/contato" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-ink">
          {schoolInfo.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-slate-600 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/portal/login" className="btn btn-primary">
          Portal
        </Link>
      </div>
    </header>
  );
}

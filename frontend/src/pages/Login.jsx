import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalLayout from "../layouts/PortalLayout";
import { portalUsers } from "../data/mockData";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = portalUsers.find(
      (item) => item.email === email.trim() && item.password === password
    );

    if (!user) {
      setError("Credenciais inválidas. Use os acessos de demonstração abaixo.");
      return;
    }

    onLogin(user);
    if (user.role === "parent" || user.role === "student") {
      navigate("/portal/pais");
      return;
    }
    if (user.role === "professor") {
      navigate("/portal/professor");
      return;
    }
    navigate("/portal/admin");
  };

  return (
    <PortalLayout title="Login do Portal">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <form onSubmit={handleSubmit} className="card space-y-4 p-6">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="exemplo@primeirospassos.com"
              type="email"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Senha</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Entrar
          </button>
        </form>
        <div className="card space-y-4 p-6 text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-ink">Acessos de demonstração</h3>
          <div>
            <p className="font-semibold text-ink">Admin</p>
            <p>admin@primeirospassos.com / admin123</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Professor</p>
            <p>professor@primeirospassos.com / prof123</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Pais</p>
            <p>pais@primeirospassos.com / pais123</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Aluno</p>
            <p>aluno@primeirospassos.com / aluno123</p>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import School from "./pages/School";
import Teaching from "./pages/Teaching";
import Structure from "./pages/Structure";
import Team from "./pages/Team";
import Enrollment from "./pages/Enrollment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ParentDashboard from "./pages/ParentDashboard";
import Diary from "./pages/Diary";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

const STORAGE_KEY = "primeiros-passos-user";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogin = (data) => {
    setUser(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const role = useMemo(() => user?.role, [user]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/a-escola"
        element={
          <PublicLayout>
            <School />
          </PublicLayout>
        }
      />
      <Route
        path="/ensino"
        element={
          <PublicLayout>
            <Teaching />
          </PublicLayout>
        }
      />
      <Route
        path="/estrutura"
        element={
          <PublicLayout>
            <Structure />
          </PublicLayout>
        }
      />
      <Route
        path="/equipe"
        element={
          <PublicLayout>
            <Team />
          </PublicLayout>
        }
      />
      <Route
        path="/matricula"
        element={
          <PublicLayout>
            <Enrollment />
          </PublicLayout>
        }
      />
      <Route
        path="/contato"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route path="/portal/login" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/portal/pais"
        element={
          role === "parent" || role === "student" ? (
            <ParentDashboard user={user} onLogout={handleLogout} />
          ) : (
            <Navigate to="/portal/login" replace />
          )
        }
      />
      <Route
        path="/portal/diario"
        element={
          role === "parent" || role === "student" ? (
            <Diary onLogout={handleLogout} />
          ) : (
            <Navigate to="/portal/login" replace />
          )
        }
      />
      <Route
        path="/portal/admin"
        element={role === "admin" ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/portal/login" replace />}
      />
      <Route
        path="/portal/professor"
        element={role === "professor" ? <TeacherDashboard onLogout={handleLogout} /> : <Navigate to="/portal/login" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

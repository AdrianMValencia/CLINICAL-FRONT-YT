import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Patient } from "../pages/Patient";
import { Medic } from "../pages/Medic";
import { Exam } from "../pages/Exam";
import { Analysis } from "../pages/Analysis";
import { TakeExam } from "../pages/TakeExam";
import { Results } from "../pages/Results";
import { User } from "../pages/User";
import { Roles } from "../pages/Roles";

export default function SideRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pacientes" element={<Patient />} />
      <Route path="/medicos" element={<Medic />} />
      <Route path="/examenes" element={<Exam />} />
      <Route path="/analisis" element={<Analysis />} />
      <Route path="/realizar-examen" element={<TakeExam />} />
      <Route path="/resultado-examen" element={<Results />} />
      <Route path="/configuraciones/usuarios" element={<User />} />
      <Route path="/configuraciones/roles" element={<Roles />} />
    </Routes>
  );
}

import {
  AiOutlineControl,
  AiOutlineFileDone,
  AiOutlineFileProtect,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { BsFileMedical } from "react-icons/bs";
import { FaUserInjured, FaUserMd, FaUsersCog } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export const menuItems = [
  {
    label: "Dashboard",
    icon: <MdOutlineAnalytics />,
    path: "/",
  },
  {
    label: "Pacientes",
    icon: <FaUserInjured />,
    path: "/pacientes",
  },
  {
    label: "Médicos",
    icon: <FaUserMd />,
    path: "/medicos",
  },
  {
    label: "Exámenes",
    icon: <AiOutlineFileDone />,
    path: "/examenes",
  },
  {
    label: "Análisis",
    icon: <AiOutlineFileSearch />,
    path: "/analisis",
  },
  {
    label: "Realizar Exámenes",
    icon: <BsFileMedical />,
    path: "/realizar-examen",
  },
  {
    label: "Resultados",
    icon: <AiOutlineFileProtect />,
    path: "/resultado-examen",
  },
  {
    label: "Configuraciones",
    icon: <FiSettings />,
    path: "/configuraciones",
    spacing: true,
    submenu: true,
    submenuItems: [
      {
        label: "Usuarios",
        icon: <FaUsersCog />,
        path: "/configuraciones/usuarios",
      },
      {
        label: "Roles",
        icon: <AiOutlineControl />,
        path: "/configuraciones/roles",
      },
    ],
  },
];

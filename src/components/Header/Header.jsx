import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

import LogIn from "../../pages/login";
import Index from "../../pages/inicio";
import SingUp from "../../pages/singup";
import Pacientes from "../../pages/pacientes";

import "./header.css";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="col1">
          <h1 className="hetitle">Monitoreo hospitalización veterinaria CVZ</h1>
        </div>
        <div className="pestañas">
          <ul>
          <h1 className="link"><li>
            <Link to="/">Inicio</Link>
          </li></h1>
          <h1 className="link"><li>
            <Link to="/login">Iniciar Sesión</Link>
          </li></h1>
          <h1 className="link"><li>
            <Link to="/singup">Registrarse</Link>
          </li></h1>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/singup" element={<SingUp />}></Route>
        <Route path="/pacientes" element={<ProtectedRoutes><Pacientes/></ProtectedRoutes>}></Route>
      </Routes>
    </Router>
  );
};

export default Header;


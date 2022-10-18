import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import React from "react";
import ReactDOM from "react-dom";
import *as react from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "/Users/emers/OneDrive/Escritorio/intranet-frond-end/intranet-frond-end/src/App.css"


import { Datos } from './componentes/Datos';
import { Equipo } from './componentes/Equipo';
import { Solicitudes } from './componentes/Solicitudes';
import { Documentos } from './componentes/Documentos';
import { Login } from './componentes/Login';
import { Inicio } from 'componentes/Inicio';
import { Nav } from 'componentes/Nav';

function Interfaz() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Nav" element={<Nav/>} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Datos" element={<Datos />} />
        <Route path="/Documentos" element={<Documentos />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
        <Route path="/Equipo" element={<Equipo />} />
      </Routes>
    </div>
  );
}

export default Interfaz;

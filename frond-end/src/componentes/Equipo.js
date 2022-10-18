import { Link } from "react-router-dom";
import React from 'react';


export function Equipo (){
    return(
     <div>
        <div class="container-fluid">
            <div id="panel"><Link id="button" button type="submit" class="btn btn-danger w-20" to="/">Cerrar Sesion</Link></div>
            <div id="panel2">
                <ul class="navbar-nav pe-4">
                    <img src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" width={210} height={210} id="imagen"></img>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><h3>Emerson Leandro<br></br>Bravo Carvallo</h3></a>
                    </li><br></br>
                    <Link class="btn btn-danger" type="submit" to="/Datos">Mis Datos</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Documentos'>Documentos</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Solicitudes'>Solicitudes</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Equipo'>Mi Equipo</Link><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                </ul>
            </div>
        </div>
        
     </div>
    )

}




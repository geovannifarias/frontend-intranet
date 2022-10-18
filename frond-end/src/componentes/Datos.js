import React from 'react';
import { Link } from "react-router-dom";


export function Datos() {
    return (
        <div>
            <nav id="panel1" class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-dark" href="#">
                        <Link id="cerrar" button type="submit" class="btn btn-danger w-20" to="/">Cerrar Sesion</Link>
                    </a>
                </div>
            </nav>
            <nav id="panel2" class="navbar">
                <div class="container-fluid">
                    <a class="navbar" href="#">
                        <ul class="navbar-nav">
                            <img src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" width={210} height={210} id="imagen"></img>
                            <li class="nav-item">
                                <a id="Nombre" class="nav-link active" aria-current="page" href="#"><h3>Emerson Leandro<br></br>Bravo Carvallo</h3></a>
                            </li><br></br>
                            <Link id="boton" class="btn btn-danger" type="submit" to="/Datos">Mis Datos</Link><br></br>
                            <Link id="boton" class="btn btn-danger" type="submit" to='/Documentos'>Documentos</Link><br></br>
                            <Link id="boton" class="btn btn-danger" type="submit" to='/Solicitudes'>Solicitudes</Link><br></br>
                            <Link id="boton" class="btn btn-danger" type="submit" to='/Equipo'>Mi Equipo</Link><br></br>
                            <br></br><br></br><br></br><br></br><br></br>
                        </ul>
                    </a>
                </div>
            </nav>
            <div className='tabla1'>
                <h2 id="datos">Mis Datos</h2>
                <div class="col-md-4">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Nombres:</th>
                                <td>Emerson Leandro</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Apellidos:</th>
                                <td>Bravo Carvallo</td>
                            </tr>

                            <tr>
                                <th scope="row">Rut:</th>
                                <td>20.947.381-k</td>
                            </tr>

                            <tr>
                                <th scope="row">Correo Electronico:</th>
                                <td>emerson.bravo02@inacapmail.cl</td>
                            </tr>

                            <tr>
                                <th scope="row">Telefono:</th>
                                <td>937246212</td>
                            </tr>

                            <tr>
                                <th scope="row">Direccion:</th>
                                <td>Itahue 1726</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

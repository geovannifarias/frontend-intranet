import React from 'react';
import { Link } from "react-router-dom";

export function Inicio() {
    return (
        <div className='container'>
            <div id="panel"><Link id="button" button type="submit" class="btn btn-danger w-20" to="/">Cerrar Sesion</Link></div>
            <div id="panel2">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
                    <img src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" width={210} height={210} id="imagen"></img>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><h3>Emerson Leandro<br></br>Bravo Carvallo</h3></a>
                    </li><br></br><br></br>
                    <Link class="btn btn-danger" type="submit" to="/Datos">Mis Datos</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Documentos'>Documentos</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Solicitudes'>Solicitudes</Link><br></br>
                    <Link class="btn btn-danger" type="submit" to='/Equipo'>Mi Equipo</Link><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                </ul>
            </div>
            <br></br><br></br>
           <div className='tabla'>
           <h1 className='titulo1'>¡Bienvenido!</h1>
            <br></br><br></br>
            <table class="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col"><h2 id='letra1'>¡Tienes nuevos Documentos!</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"> <img id="logos" src='https://images.vexels.com/media/users/3/135937/isolated/preview/272d6a23bbb09cc4e831dfbd56c7c533-icono-de-trazo-de-documento-de-archivo.png' width={200} height={210}></img></td>
                    </tr>
                </tbody>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col"><h2 id='letra1'>¡Tienes nuevas Solicitudes!</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"><img id="logos" src='https://images.vexels.com/media/users/3/136340/isolated/preview/74ac661d8216442ae469efb39c9584dc-icono-de-mensaje-de-correo.png' width={210} height={210}></img></td>
                    </tr>
                </tbody>
            </table>
           </div>

           <h1 id="datos">Mis Datos</h1>
     <div class="col-md-9">
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
    )
}

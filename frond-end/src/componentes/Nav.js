import { Link } from "react-router-dom";

export function Nav({ titulo }) {
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
        </div>
    )
}
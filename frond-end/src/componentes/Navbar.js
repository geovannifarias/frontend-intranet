import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div class="container-fluid">
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href=""> Intranet</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><img src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" width={220} height={220} id="imagen"></img></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-4">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><h2>Emerson Leandro<br></br>Bravo Carvallo</h2></a>
                            </li><br></br>
                            <Link class="btn btn-danger" type="submit" to="/Datos">Mis Datos</Link><br></br>
                            <Link class="btn btn-danger" type="submit" to='/Documentos'>Documentos</Link><br></br>
                            <Link class="btn btn-danger" type="submit" to='/Solicitudes'>Solicitudes</Link><br></br>
                            <Link class="btn btn-danger" type="submit" to='/Equipo'>Mi Equipo</Link><br></br>
                            <br></br><br></br><br></br><br></br><br></br>
                            <Link className="" button type="submit" class="btn btn-danger w-50" to="/">Cerrar Sesion</Link><br></br>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
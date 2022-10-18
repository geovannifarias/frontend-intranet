import { Link } from "react-router-dom";
import React from 'react';


export function Login() {
    return (
        <div class="container">
            <div class="row vh-100 justify-content-center align-items-center">
                <div class="col-auto p-5" id="login">
                    <h1 class="text-3x1 font-bold text-center">Inicio Sesion</h1>
                    <form action="" method="POST" class="mt-4">
                        <div class="input-group p-3">
                            <input type="text" name="name" placeholder="Rut" class="border border-gray-200 w-full text-lg placeholder-gray-500 p-2 my-2 focus:bg-white" required></input>
                        </div>
                        <div div class="input-group p-3">
                            <input type="password" name="password" placeholder="Password" class="border border-gray-200 w-full text-lg placeholder-gray-500 p-2 my-2 focus:bg-white" required></input>
                        </div>
                        <Link id="iniciar" className="" button type="submit" class="btn btn-danger w-10" to="/Nav">INGRESAR</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

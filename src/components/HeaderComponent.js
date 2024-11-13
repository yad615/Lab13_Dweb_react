import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link formato01" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link formato01" to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link formato01" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link formato01" to="/ventas">Ventas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link formato01" to="/compras">Compras</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Sidebar() {
    const { pathname } = useLocation();

    const activeCB = (data) => 
        data.isActive ? "is-active" : false;
    const activeRestaurantCB = (data) => {
        let check = ['/', '/restaurant'].includes(pathname);
        return check ? "is-active" : false;
    }

    return (
        <aside class="menu is-hidden-mobile">

            <p class="menu-label">
                Cloud Food
            </p>

            <ul class="menu-list">
                <li>
                    <NavLink to="/" className={activeRestaurantCB} end>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-utensils"></i>
                            </span>
                            <span>Restaurantes</span>
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-cart-shopping"></i>
                            </span>
                            <span>Carrito</span>
                        </span>
                    </NavLink>
                </li>
            </ul>

            <p class="menu-label">
                Otros
            </p>

            <ul class="menu-list">
                <li>
                    <NavLink to="/notifications" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-bell"></i>
                            </span>
                            <span>Notificaciones</span>
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tickets" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-money-bill"></i>
                            </span>
                            <span>Facturas</span>
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/help" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-circle-info"></i>
                            </span>
                            <span>Ayuda</span>
                        </span>
                    </NavLink>
                </li>
            </ul>

            <p class="menu-label">
                Cuenta
            </p>

            <ul class="menu-list">
                <li>
                    <NavLink to="/location" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-location-pin"></i>
                            </span>
                            <span>Ubicación</span>
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/config" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Configuración</span>
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/exit" className={activeCB}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-right-from-bracket"></i>
                            </span>
                            <span>Salir</span>
                        </span>
                    </NavLink>
                </li>
            </ul>

        </aside>
    );
}

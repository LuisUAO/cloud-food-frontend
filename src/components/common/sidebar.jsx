import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Sidebar({ logged, requestLogin, requestRegister, requestRegisterRestaurant, requestLogout }) {
    const { pathname } = useLocation();

    const activeCB = (data) =>
        data.isActive ? "is-active" : false;
    const activeRestaurantCB = (data) => {
        let check = pathname == "/" || pathname.includes("/restaurant");
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

            {logged ? <>
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
                                <span>Pedidos</span>
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
                        <a onClick={requestLogout}>
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-right-from-bracket"></i>
                                </span>
                                <span>Salir</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </>
                :
                <>
                    <p class="menu-label">
                        Cuenta
                    </p>

                    <ul class="menu-list">
                        <li>
                            <a onClick={requestLogin}>
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span>Iniciar Sesion</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul class="menu-list">
                        <li>
                            <a onClick={requestRegister}>
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span>Registrarse Cliente</span>
                                </span>
                            </a>
                        </li>
                    </ul>

                    <ul class="menu-list">
                        <li>
                            <a onClick={requestRegisterRestaurant}>
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span>Registrarse Restaurante</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </>
            }
        </aside>
    );
}

import React from 'react';

export function Sidebar() {
    return (
        <aside class="menu is-hidden-mobile">

            <p class="menu-label">
                Cloud Food
            </p>

            <ul class="menu-list">
                <li>
                    <a class="is-active">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-utensils"></i>
                            </span>
                            <span>Restaurantes</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-cart-shopping"></i>
                            </span>
                            <span>Carrito</span>
                        </span>
                    </a>
                </li>
            </ul>

            <p class="menu-label">
                Otros
            </p>

            <ul class="menu-list">
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-bell"></i>
                            </span>
                            <span>Notificaciones</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-money-bill"></i>
                            </span>
                            <span>Facturas</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-circle-info"></i>
                            </span>
                            <span>Ayuda</span>
                        </span>
                    </a>
                </li>
            </ul>

            <p class="menu-label">
                Cuenta
            </p>

            <ul class="menu-list">
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-location-pin"></i>
                            </span>
                            <span>Ubicación</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Configuración</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-right-from-bracket"></i>
                            </span>
                            <span>Salir</span>
                        </span>
                    </a>
                </li>
            </ul>

        </aside>
    );
}

import React from 'react';

export function ProductsNavigator() {
    return (
        <nav class="level">

            <div class="level-left">
                <div class="level-item">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-utensils"></i>
                                        </span>
                                        <span>Restaurantes</span>
                                    </span>
                                </a>
                            </li>
                            <li><a href="#">Burger Stack</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Hamburgesas</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Buscar Producto" />
                        </p>
                        <p class="control">
                            <button class="button is-link">
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fas fa-magnifying-glass"></i>
                                    </span>
                                    <span>Buscar</span>
                                </span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

        </nav>
    );
}
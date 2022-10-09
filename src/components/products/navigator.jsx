import React from 'react';

export function ProductsNavigator() {
    return (
        <nav class="level">

            <div class="level-left">
                <div class="level-item">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button is-success" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>Categorias</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item is-active">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-star"></i>
                                        </span>
                                        <span>Populares</span>
                                    </span>
                                </a>
                                <a href="#" class="dropdown-item">
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i class="fas fa-percent"></i>
                                        </span>
                                        <span>Descuentos</span>
                                    </span>
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    Hamburgesas
                                </a>
                                <a class="dropdown-item">
                                    Sandwiches
                                </a>
                                <a href="#" class="dropdown-item">
                                    Almuerzos
                                </a>
                                <a href="#" class="dropdown-item">
                                    Desayunos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <h1 class="subtitle">Burger Stack</h1>
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
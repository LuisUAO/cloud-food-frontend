import React from 'react';

export function CartNavigator() {
    return (
        <nav class="level">
            <div class="level-left">
                <h1 class="subtitle">Lista a Pagar</h1>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <button class="button is-danger" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span>Borrar Todo</span>
                        </span>
                    </button>
                </div>

                <div class="level-item">
                    <button class="button is-success" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-money-bill"></i>
                            </span>
                            <span>Pagar</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
import React from 'react';

export function ConfigNavigator() {
    return (
        <nav class="level">
            <div class="level-left">
                <h1 class="subtitle">Configuracion</h1>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <button class="button is-success" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check"></i>
                            </span>
                            <span>Aceptar</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
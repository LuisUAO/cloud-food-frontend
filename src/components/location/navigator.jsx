import React from 'react';

export function LocationNavigator() {
    return (
        <nav class="level">
            <div class="level-left">
                <h1 class="subtitle">Ingrese donde se Ubica</h1>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-location-pin"></i>
                            </span>
                            <span>Ubicacion Actual</span>
                        </span>
                    </button>
                </div>

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
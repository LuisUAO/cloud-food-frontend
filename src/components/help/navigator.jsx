import React from 'react';

export function HelpNavigator() {
    return (
        <nav class="level">
            <div class="level-left">
                <h1 class="subtitle">Ayuda - Soporte de Usuario</h1>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <span>Enviar</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
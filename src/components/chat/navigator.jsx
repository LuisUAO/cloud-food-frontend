import React from 'react';
import { Link } from 'react-router-dom';

export function ChatNavigator({ id, name }) {
    return (
        <nav class="level">
            <div class="level-left">
                <div className="level-item">
                    <h1 class="subtitle">Chat con {name}</h1>
                </div>
            </div>

            <div class="level-right">
                <div className="level-item">
                    <Link to={`/restaurant/${id}`} class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Volver</span>
                        <span class="icon is-small">
                            <i class="fas fa-arrow-left" aria-hidden="true"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
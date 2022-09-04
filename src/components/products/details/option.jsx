import React from 'react';

export function ProductsDetailOption() {
    return (
        <div class="block">
            <div class="block">
                <nav class="level">
                    <div class="level-left">
                        <h1 class="subtitle">Elije tu proteina</h1>
                    </div>

                    <div class="level-right">
                        <span class="tag">Obligatorio</span>
                    </div>
                </nav>
            </div>

            <div class="buttons">
                <button class="button is-fullwidth is-info">Carne</button>
                <button class="button is-fullwidth">Carne Agnus</button>
                <button class="button is-fullwidth">Pollo</button>
            </div>
        </div>

    );
}
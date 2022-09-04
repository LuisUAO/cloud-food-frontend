import React from 'react';

export function CartItem() {
    return (
        <div class="box">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://images.rappi.com/restaurants_logo/g-1607543024380.jpg" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Combo Hamburgesa Agnus</strong> <strong>x2</strong> <strong>$ 18 000</strong> <small>Burger Stack</small> <br />
                            <ul>
                                <li>Hamburgesa Carne Agnus</li>
                                <li>+ Bebiba Coca Cola</li>
                                <li>+ Papas a la francesa Mediana</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div class="media-right">
                    <a class="button is-danger">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span>Borrar</span>
                        </span>
                    </a>
                </div>

                <div class="media-right">
                    <a class="button is-warning">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-pen"></i>
                            </span>
                            <span>Editar</span>
                        </span>
                    </a>
                </div>
            </article>
        </div>
    );
}
import React from 'react';

export function NotificationsItem() {
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
                            <strong>Combo Hamburgesa Agnus</strong> <strong>x2</strong> <strong>$ 18 000</strong>
                            <br />
                            <small>Burger Stack</small> <small>03/10/2022</small>
                            <br /> <br />
                            <p class="subtitle">Su Pedido Va en Camino</p>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
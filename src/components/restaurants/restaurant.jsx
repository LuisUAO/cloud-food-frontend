import React from 'react';

export function Restaurant() {
    return (
        <div class="card">

            <div class="card-image">
                <figure class="image is-5by3">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-o/0d/bc/96/67/borgo-burger.jpg"
                        alt="Restaurant Image" />
                </figure>
            </div>

            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://images.rappi.com/restaurants_logo/g-1607543024380.jpg"
                                alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Burger Stack</p>
                        <p class="subtitle is-6">Hamburgesas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
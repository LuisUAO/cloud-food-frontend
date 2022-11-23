import React from 'react';
import { NavLink } from 'react-router-dom';

export function Restaurant({ id, name, description }) {
    const activeCB = (nav) => 
        nav.isActive ? "is-active" : false;

    return (
        <NavLink to={`/restaurant/${id}`} className={activeCB}>
            <div class="card">

                <div class="card-image">
                    <figure class="image is-5by3">
                        <img src="https://st.depositphotos.com/3470617/4920/v/600/depositphotos_49202481-stock-illustration-fast-food.jpg"
                            alt="Restaurant Image" />
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366750.png"
                                    alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{ name }</p>
                            <p class="subtitle is-6">{ description }</p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}
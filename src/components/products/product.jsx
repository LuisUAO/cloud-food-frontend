import React from 'react';

export function Product({onClick}) {
    return (
        <a onClick={onClick}>
            <div class="card">

                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-p/15/a8/bc/e3/photo0jpg.jpg"
                            alt="Product Image" />
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Hamburgesa</p>
                            <p class="title is-6">$ 18 000</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </a>
    );
}
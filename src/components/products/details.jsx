import React from 'react';
import { ProductsDetailOption } from './details/option';
import { Product } from './product';

export function ProductsDetail({visible, onAccept, onClose}) {
    return (
        <div class={`modal ${visible ? "is-active" : ""}`} id="products-detail">
            <div class="modal-background"></div>
            <div class="modal-card" style={{width: '75%'}}>

                <header class="modal-card-head">
                    <p class="modal-card-title">[Nombre Producto]</p>
                    <button class="delete" aria-label="close"></button>
                </header>

                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column is-4">
                            <Product name={"No Alcanzamos"} price={1000}/>
                        </div>
                        <div class="column is-8">
                            <ProductsDetailOption />
                            <ProductsDetailOption />
                        </div>
                    </div>
                </section>

                <footer class="modal-card-foot">
                    <button class="button is-success" onClick={onAccept}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-cart-shopping"></i>
                            </span>
                            <span>Agregar al Carrito</span>
                        </span>
                    </button>
                    <button class="button" onClick={onClose}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-xmark"></i>
                            </span>
                            <span>Cancelar</span>
                        </span>
                    </button>
                </footer>

            </div>
        </div>
    );
}
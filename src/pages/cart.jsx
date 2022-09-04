import React from 'react';
import { CartItem } from '../components/cart/item';
import { CartNavigator } from '../components/cart/navigator';

export function CartPage() {
    return (
        <>
            <CartNavigator />
            <div class="container">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </>
    );
}
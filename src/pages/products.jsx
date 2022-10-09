import React from 'react';
import { Grid } from '../components/common/grid';
import { Product } from '../components/products/product';
import { ProductsNavigator } from '../components/products/navigator';
import { ProductsDetail } from '../components/products/details';
import { useState } from 'react';

export function ProductsPage() {
    let [active, setActive] = useState(false);

    const onProductFake = (e) => setActive(true);
    const onModalFake = (e) => setActive(false);

    return (
        <>
            <ProductsNavigator />
            <div class="container">
                <Grid>
                    <Product onClick={onProductFake}/>
                    <Product onClick={onProductFake}/>
                    <Product onClick={onProductFake}/>
                </Grid>
            </div>

            <ProductsDetail visible={active} onAccept={onModalFake} onClose={onModalFake}/>
        </>
    );
}
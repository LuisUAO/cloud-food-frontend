import React from 'react';
import { Grid } from '../components/common/grid';
import { Product } from '../components/products/product';
import { ProductsNavigator } from '../components/products/navigator';
import { ProductsDetail } from '../components/products/details';
import { useState } from 'react';
import { ProductsEditor } from '../components/products/seller/editor';

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
            <ProductsEditor visible={active} onClose={onModalFake}></ProductsEditor>
            <ProductsDetail visible={false} onAccept={onModalFake} onClose={onModalFake}/>
        </>
    );
}
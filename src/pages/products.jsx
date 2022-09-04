import React from 'react';
import { Grid } from '../components/common/grid';
import { Product } from '../components/products/product';
import { ProductsNavigator } from '../components/products/navigator';
import { ProductsDetail } from '../components/products/details';

export function ProductsPage() {
    return (
        <>
            <ProductsNavigator />
            <div class="container">
                <Grid>
                    <Product />
                    <Product />
                    <Product />
                </Grid>
            </div>
            <ProductsDetail />
        </>
    );
}
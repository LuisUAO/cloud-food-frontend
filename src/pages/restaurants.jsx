import React from 'react';
import { Grid } from '../components/common/grid';
import { RestaurantsNavigator } from '../components/restaurants/navigator';
import { Restaurant } from '../components/restaurants/restaurant';

export function RestaurantsPage() {
    return (
        <>
            <RestaurantsNavigator />
            <div class="container">
                <Grid>
                    <Restaurant />
                    <Restaurant />
                    <Restaurant />
                </Grid>
            </div>
        </>
    );
}
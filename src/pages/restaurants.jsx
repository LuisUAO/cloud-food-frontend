import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Grid } from '../components/common/grid';
import { RestaurantsNavigator } from '../components/restaurants/navigator';
import { Restaurant } from '../components/restaurants/restaurant';
import { useRestaurants } from '../hooks/restaurant';
import { UserContext } from '../hooks/user';

export function RestaurantsPage() {
    let user = useContext(UserContext);
    let [restaurants, restaurantsReload] = useRestaurants(user.token);
    // Cargar Restaurantes (Una Sola Vez)
    useEffect(() => restaurantsReload(), [user]);

    return (
        <>
            <RestaurantsNavigator />
            <div class="container">
                <Grid>
                    { 
                        restaurants && restaurants.restaurantes.map(
                            x => <Restaurant id={x._id} name={x.nombre} description={x.descripcion}/>)
                    }
                </Grid>
            </div>
        </>
    );
}
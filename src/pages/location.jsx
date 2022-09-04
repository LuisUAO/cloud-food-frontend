import React from 'react';
import { LocationNavigator } from '../components/location/navigator';
import { LocationMap } from '../components/location/map';

export function LocationPage() {
    return (
        <>
            <LocationNavigator />
            <div class="container">
                <LocationMap />
            </div>
        </>
    );
}
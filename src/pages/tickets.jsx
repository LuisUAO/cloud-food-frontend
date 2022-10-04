import React from 'react';
import { TicketsNavigator } from '../components/tickets/navigator';
import { TicketsItem } from '../components/tickets/item';

export function TicketsPage() {
    return (
        <>
            <TicketsNavigator />
            <div class="container">
                <TicketsItem />
                <TicketsItem />
                <TicketsItem />
            </div>
        </>
    );
}
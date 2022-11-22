import React from 'react';
import { NotificationsNavigator } from '../components/notifications/navigator';
import { NotificationsItem } from '../components/notifications/item';

export function NotificationsPage() {
    return (
        <>
            <NotificationsNavigator />
            <div class="container">
                <NotificationsItem />
                <NotificationsItem />
                <NotificationsItem />
            </div>
        </>
    );
}
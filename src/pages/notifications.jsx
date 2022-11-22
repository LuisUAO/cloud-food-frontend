import React from 'react';
import { NotificationsNavigator } from '../components/notifications/navigator';
import { NotificationsItem } from '../components/notifications/item';
import NotificationsChat from '../components/notifications/chat';
import NotificationsPrompt from '../components/notifications/prompt';
import { useParams } from 'react-router-dom';

export function NotificationsChatPage() {
    let { id } = useParams();

    return (
        <>
            <NotificationsNavigator />
            <NotificationsPrompt></NotificationsPrompt>
            <NotificationsChat></NotificationsChat>
        </>
    )
}

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
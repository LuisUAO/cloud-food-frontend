import React from 'react';
import { Sidebar } from './sidebar';

export function Layout(props) {
    return (
        <div class="container main">
            <div class="columns">

                <div class="column is-3">
                    <Sidebar 
                        logged={props.logged} 
                        requestLogin={props.requestLogin}
                        requestRegister={props.requestRegister}
                        requestLogout={props.requestLogout}
                    />
                </div>

                <div class="column is-9">
                    {props.children}
                </div>

            </div>
        </div>
    );
}
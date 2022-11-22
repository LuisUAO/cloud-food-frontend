import React from 'react';
import { useState } from 'react';

export function LoginForm({visible, onLogin, onCancel}) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const cbChangeEmail = (e) => setEmail(e.target.value);
    const cbChangePassword = (e) => setPassword(e.target.value);
    const cbLogin = (e) => onLogin(email, password);

    return (
        <div class={`modal ${visible ? "is-active" : ""}`} id="login-form">
            <div class="modal-background"></div>
            <div class="modal-card">

                <header class="modal-card-head">
                    <p class="modal-card-title">Iniciar Sesion</p>
                    <button class="delete" aria-label="close"></button>
                </header>

                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Correo Electronico</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="Ingrese su correo" value={email} onChange={cbChangeEmail}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Ingrese su contraseña" value={password} onChange={cbChangePassword}/>
                        </div>
                    </div>
                </section>

                <footer class="modal-card-foot">
                    <button class="button is-success" onClick={cbLogin}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Ingresar</span>
                        </span>
                    </button>
                    <button class="button" onClick={onCancel}>
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-xmark"></i>
                            </span>
                            <span>Cancelar</span>
                        </span>
                    </button>
                </footer>

            </div>
        </div>
    );
}
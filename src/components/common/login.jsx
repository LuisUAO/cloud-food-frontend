import React from 'react';

export function LoginForm() {
    return (
        <div class="modal" id="login-form">
            <div class="modal-background"></div>
            <div class="modal-card">

                <header class="modal-card-head">
                    <p class="modal-card-title">Iniciar Sesion</p>
                    <button class="delete" aria-label="close"></button>
                </header>

                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Usuario</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Ingrese su usuario" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Ingrese su contraseña" />
                        </div>
                    </div>
                </section>

                <footer class="modal-card-foot">
                    <button class="button is-success">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Ingresar</span>
                        </span>
                    </button>
                    <button class="button">
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
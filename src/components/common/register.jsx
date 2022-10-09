import React from 'react';

export function RegisterForm() {
    return (
        <div class="modal" id="login-form">
            <div class="modal-background"></div>
            <div class="modal-card">

                <header class="modal-card-head">
                    <p class="modal-card-title">Registrarse</p>
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

                    <div class="field">
                        <label class="label">Nombres</label>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Nombre" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="email" placeholder="Apellido" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Celular</label>
                        <div class="control">
                            <input class="input" type="number" placeholder="Celular" />
                        </div>
                        <p class="help">Ingrese su numero de celular</p>
                    </div>

                    <div class="field">
                        <label class="label">Fecha de Nacimiento</label>
                        <div class="control">
                            <input class="input" type="date" placeholder="Celular" />
                        </div>
                        <p class="help">Ingrese su fecha de nacimiento</p>
                    </div>

                </section>

                <footer class="modal-card-foot">
                    <button class="button is-success">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-user"></i>
                            </span>
                            <span>Registarse</span>
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
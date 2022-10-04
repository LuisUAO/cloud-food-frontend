import React from 'react';

export function ConfigForm() {
    return (
        <form>
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
                            <input class="input is-success" type="email" placeholder="Apellido" />
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
        </form>
    );
}
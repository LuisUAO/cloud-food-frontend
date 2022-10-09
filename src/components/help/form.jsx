import React from 'react';

export function HelpForm() {
    return (
        <form class="box">
            <div class="field">
                <label class="label">Motivo</label>
                <div class="control">
                    <div class="select">
                        <select class="is-hovered">
                            <option>Peticion</option>
                            <option>Queja</option>
                            <option>Reclamo</option>
                            <option>Sugerencia</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Mensaje</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Ingrese el Mensaje"></textarea>
                </div>
                <p class="help">Ingrese la descripción del mensaje</p>
            </div>
        </form>
    );
}
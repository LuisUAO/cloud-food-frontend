import React from 'react';
import { useState } from 'react';

export function ProductsEditor({ visible, product, onAccept, onDelete, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  if (product) {
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
  }

  const cbChangeName = (e) => setName(e.target.value);
  const cbChangePrice = (e) => setPrice(e.target.value);
  const cbChangeImage = (e) => setImage(e.target.value);
  // Cuando se Acepte llevar Parametros
  const cbAccept = () => onAccept(product, name, price, image);

  return (
    <div class={`modal ${visible ? "is-active" : ""}`} id="products-detail">
      <div class="modal-background"></div>
      <div class="modal-card">

        <header class="modal-card-head">
          <p class="modal-card-title">Administrar Producto</p>
          <button class="delete" aria-label="close"></button>
        </header>

        <section class="modal-card-body">
          <form class="box">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input class="input" type="text" placeholder="Nombre del Producto" onChange={cbChangeName}/>
              </div>
            </div>

            <div class="field">
              <label class="label">Precio Unidad</label>
              <div class="control">
                <input class="input" type="number" placeholder="Precio del Producto" onChange={cbChangePrice}/>
              </div>
            </div>

            <div class="field">
              <label class="label">Imagen</label>
              <div class="control">
                <input class="input" type="file" placeholder="Imagen Promocional" onChange={cbChangeImage}/>
              </div>
            </div>
          </form>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success" onClick={cbAccept}>
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span>Aceptar</span>
            </span>
          </button>

          <button class="button is-danger" onClick={onDelete}>
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-xmark"></i>
              </span>
              <span>Eliminar</span>
            </span>
          </button>

          <button class="button" onClick={onClose}>
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
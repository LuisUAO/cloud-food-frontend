import { useState } from "react";

// --------------------
// HOOK DE RESTAURANTES
// --------------------

export function useRestaurants(token) {
  let [restaurants, setRestaurants] = useState();

  const restaurantsReload = () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      }
    };
    
    fetch('http://localhost:4000/api/restaurante', options)
      .then(response => response.json())
      .then(response => setRestaurants(response))
      .catch(err => console.error(err));
  };

  return [restaurants, restaurantsReload];
}

// -----------------
// HOOK DE PRODUCTOS
// -----------------

export function useProducts(token, restaurant) {
  let [products, setProducts] = useState();

  const productsReload = () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      }
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}`, options)
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(err => console.error(err));
  }

  // Crear Producto
  const productsCreate = (data) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      },
      body: data
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    // Volver a Cargar los Items
    productsReload();
  }

  // Actualizar Producto
  const productsUpdate = (id, data) => {
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      },
      body: data
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}/${id}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    // Volver a Cargar los Items
    productsReload();
  }

  // Remover Producto
  const productsRemove = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      }
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}/${id}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    // Volver a Cargar los Items
    productsReload();
  }

  return [products, productsReload, productsCreate, productsUpdate, productsRemove];
}

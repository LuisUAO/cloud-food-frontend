import { useState } from "react";

// --------------------
// HOOK DE RESTAURANTES
// --------------------

export function useRestaurant(id, token) {
  let [restaurant, setRestaurant] = useState();

  const restaurantReload = async () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      }
    };
    
    return fetch(`http://localhost:4000/api/restaurante/${id}`, options)
      .then(response => response.json())
      .then(response => setRestaurant(response))
      .catch(err => console.error(err));
  };

  return [restaurant, restaurantReload];
}

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

  const productsReload = async () => {
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
  const productsCreate = async (data) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}`, options)
      .then(response => response.json())
      .then(response => productsReload())
      .catch(err => console.error(err));
  }

  // Actualizar Producto
  const productsUpdate = async (id, data) => {
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}/${id}`, options)
      .then(response => response.json())
      .then(response => productsReload())
      .catch(err => console.error(err));
  }

  // Remover Producto
  const productsRemove = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'x-token': token
      }
    };
    
    fetch(`http://localhost:4000/api/producto/${restaurant}/${id}`, options)
      .then(response => response.json())
      .then(response => productsReload())
      .catch(err => console.error(err));
  }

  return [products, productsReload, productsCreate, productsUpdate, productsRemove];
}

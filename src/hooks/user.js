import { useState } from "react";

// ----------------
// Hooks de Usuario
// ----------------

export function useUser() {
  let [user, setUser] = useState(false);

  const userLogin = (email, password) => {
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email, password})
    };
    
    fetch('http://localhost:4000/api/auth', options)
      .then(response => response.json())
      .then(response => setUser(response))
      .catch(err => console.error(err));
  }

  const userRegister = (information) => {
    const body = {
      email: information.email,
      password: information.password,
      name: information.name,
    };

    if (information.restaurant)
      body.restaurant = information.restaurantName;

    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(body)
    };
    
    fetch('http://localhost:4000/api/auth/new', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  const userLogout = () => {
    setUser = setUser(false);
  }

  // Regresa el Nuevo Hook
  return [user, userLogin, userLogout, userRegister];
}


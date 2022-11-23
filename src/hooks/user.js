import { createContext, useState } from "react";
export const UserContext = createContext();

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
      .catch(err => console.error(err))
      .then(response => response.json())
      .then(response => setUser(response));
  }

  const userRegister = (information) => {
    const body = {
      email: information.email,
      password: information.password,
      name: information.name,
    };

    if (information.restaurant) {
      body.restaurant = information.restaurantName;
      body.description = information.restaurantDesc;
    }

    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(body)
    };
    
    fetch('http://localhost:4000/api/auth/new', options)
      .catch(err => console.error(err))
      .then(response => response.json())
      .then(response => setUser(response));
  }

  const userLogout = () => {
    setUser = setUser(false);
  }

  // Regresa el Nuevo Hook
  return [user, userLogin, userLogout, userRegister];
}


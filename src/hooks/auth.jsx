import { createContext, useEffect, useState, useContext } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  async function signIn(email, password) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      setUserData(user);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);
    
    } catch (error) {
      if(error.response) {
        console.log(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login. Por favor, tente mais tarde.");
      }
    }
  }

  function signOut() {
    setUserData(null);
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    if(user && token) {
      setUserData(user);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
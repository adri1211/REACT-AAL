import { createContext, useContext, useState } from "react";

//creo contexto
const AuthContex = createContext();

//creo provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  //hacer login
  // simulo el login, si existe un token en el localstorage con valor
  // true, entonces el usuario esta logeado
    const login = () => {
      if (JSON.parse(localStorage.getItem('token')) === true) {
        setIsAuthenticated(true)
      }
      localStorage.setItem('token', JSON.stringify(true))
    }
    //hacer logout
    const logout = () => {
      if (localStorage.setItem('token', JSON.stringify(false))) {
        setIsAuthenticated(false)
      }
    }

    return (
      <AuthContex.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContex.Provider>
    )
}

//creo un hook personalizado para exportar el contexto

export const useAuth = () => {
  const context = useContext(AuthContex)
  if(!context){
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context;
}

//uso del hook en un componente
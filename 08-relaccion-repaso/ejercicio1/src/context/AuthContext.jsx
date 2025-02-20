import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    //estado para almacenar la info del user logueado
    const [user, setUser] = useState(null)
    // verificar si tengo un token
    const [isLogin, setIsLogin] = useState(false);
    // estoy haciendo el fetching y esta cargando la data
    const [isLoading, setIsLoading] = useState(false);
    // si hay un error
    const [error, setError] = useState(null);

    useEffect(() => {
      checkAuth()

    
    }, [])

    // función para saber si el user esta logeado porque existe el token
    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                // aqui volvere para decodificar el token y hacer uso si es necesario
                setIsLogin(true);
                // cuando saco algo en el LocalStorage parse y caundo lo meto stringify
                // setUser(JSON.parse(localStorage.getItem('user')));
            }
        } catch (error) {
            console.log("Error al verificar el usuario logueado", error.message);
            setError(error.message);
        }   finally {
            setIsLoading(false);
        }
    }
    
    
    const value = {user, isLoading, isLogin, error};
    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    );
}
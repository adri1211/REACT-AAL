import { useContext, useState } from "react";
import { createContext } from "react";

//creamos el contexto
const PokemonContext = createContext();

//creamos el provider del contexto
export function PokemonProvider({ children }) {

    //hook
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {}
    const removeFromFavorites = (pokemonId) => {};


    //funcionalidades del provider



  return (
    <PokemonContext.Provider value={{}}>
      {children}
    </PokemonContext.Provider>
  );
}


//me creo un hook personalizado para cargar el contexto
export const usePokemon = () => {

    //para usar el contexto:
    const context = useContext(PokemonContext);
    if (context === undefined) {
      throw new Error("usePokemon must be used within a PokemonProvider");
    }
    return context;
} 

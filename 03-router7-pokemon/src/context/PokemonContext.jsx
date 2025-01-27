import { useContext, useState } from "react";
import { createContext } from "react";

//creamos el contexto
const PokemonContext = createContext();

//creamos el provider del contexto
export function PokemonProvider({ children }) {

    //hook
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
      // verificamos si el pokemon esta en favoritos
      if(favorites.some(poke=>poke.id === pokemon.id)){
        //lanzamos error con sonner
        return;

      }

      setFavorites((preFavoritos)=> [...preFavoritos, pokemon])


    }
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

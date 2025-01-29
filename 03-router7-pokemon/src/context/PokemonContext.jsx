import { useContext, useState } from "react";
import { createContext } from "react";
import { toast} from "sonner";

//creamos el contexto
const PokemonContext = createContext();

//creamos el provider del contexto
export function PokemonProvider({ children }) {

    //hook
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (pokemon) => {
      // verificamos si el pokemon esta en favoritos
      if(favorites.some(poke=>poke.id === pokemon.id)){
        toast.error("El pokemon ya esta en favoritos", {
          style: {
            border: "2px solid red",
            background: "red",
            color: "white",
          },
        });
        return;

      }

      setFavorites((preFavoritos)=> [...preFavoritos, pokemon]);
      toast.success(`${pokemon.name} añadido a favoritos`, {
        style: {
          border: "2px solid green",
          background: "green",
          color: "white",
        },
        icon: "🚀",
      });


    }
    const removeFromFavorites = (pokemonId) => {
      setFavorites((preFavoritos)=> preFavoritos.filter(poke=>poke?.id !== pokemonId))
      // ? es para evitar errores si no hay id
      toast.success(`Pokemon eliminado de favoritos`, {
        style: {
          border: "2px solid green",
          background: "green",
          color: "white",
        },
        icon: "🗑️",
      });
      

    };


    //funcionalidades del provider



  return (
    <PokemonContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
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
